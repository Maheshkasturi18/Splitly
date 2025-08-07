import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { getAuth, signOut } from "firebase/auth";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [groups, setGroups] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupDesc, setGroupDesc] = useState("");
  const [members, setMembers] = useState([]);
  const [memberName, setMemberName] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUser(data));

    axios
      .get("http://localhost:5000/groups")
      .then((res) => res.json())
      .then((data) => setGroups(data));
  }, []);

  const addMember = () => {
    if (memberName && memberEmail) {
      setMembers([...members, { name: memberName, email: memberEmail }]);
      setMemberName("");
      setMemberEmail("");
    }
  };

  const createGroup = async () => {
    const response = axios.post("http://localhost:5000/groups", {
      body: JSON.stringify({
        name: groupName,
        description: groupDesc,
        members: members,
        admin: user.email,
      }),
    });
    const data = await response.json();
    alert(data.message);
    setShowModal(false);
    setGroupName("");
    setGroupDesc("");
    setMembers([]);
    // Refresh groups
    const groupsRes = await axios.get("http://localhost:5000/groups");
    const groupsData = await groupsRes.json();
    setGroups(groupsData);
  };

  const logout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/logout",
        {},
        {
          withCredentials: true,
        }
      );

      alert("logout successfull");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("http://localhost:5000/dashboard", {
          withCredentials: true,
        });
        setUser(res.data.user);

        console.log("res.data.user", res.data.user);
      } catch (error) {
        console.error("Auth check failed", error);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

        <button
          className="logout cursor-pointer border border-1 p-2 rounded-md"
          onClick={logout}
        >
          Logout
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-purple-600 text-white p-4 rounded-lg shadow">
          <p>Total Balance</p>
          <p className="text-3xl font-bold">
            ₹{user?.balance?.toFixed(2) || "0.00"}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p>Your Groups</p>
          <p className="text-3xl font-bold">{groups.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p>Profile</p>
          <p>{user?.name || ""}</p>
          <p>{user?.email || ""}</p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <h2 className="text-xl font-semibold mt-6 mb-2">Your Groups</h2>
        <button
          onClick={() => setShowModal(true)}
          className="mt-2 px-4 py-2 bg-purple-600 text-white rounded cursor-pointer"
        >
          Create Group
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {groups.map((group) => (
          <div key={group._id} className="bg-white p-4 rounded shadow">
            <p>{group.name}</p>
            <p>{group.members.length} members</p>
            <p>Total Expenses: ${group.totalExpenses?.toFixed(2)}</p>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/75 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96 shadow-2xl">
            <h2 className="text-lg font-bold mb-2">Create a New Group</h2>

            <button
              className="cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              close
            </button>
            <input
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="Group Name"
              className="w-full p-2 border rounded mb-2"
            />
            <textarea
              value={groupDesc}
              onChange={(e) => setGroupDesc(e.target.value)}
              placeholder="Description"
              className="w-full p-2 border rounded mb-2"
            />
            <div className="bg-purple-100 p-2 rounded mb-2 text-sm">
              You'll be automatically added as admin.
            </div>
            <input
              value={memberName}
              onChange={(e) => setMemberName(e.target.value)}
              placeholder="Member Name"
              className="w-full p-2 border rounded mb-2"
            />
            <input
              value={memberEmail}
              onChange={(e) => setMemberEmail(e.target.value)}
              placeholder="Member Email"
              className="w-full p-2 border rounded mb-2"
            />
            <button
              onClick={addMember}
              className="px-4 py-1 border border-purple-600 text-purple-600 rounded mb-2 cursor-pointer"
            >
              Add Member
            </button>
            <div>
              {members.map((m, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center bg-gray-100 p-1 rounded my-1"
                >
                  <span>
                    {m.name} ({m.email})
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={createGroup}
                className="px-4 py-2 bg-purple-600 text-white rounded cursor-pointer"
              >
                Create Group
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
