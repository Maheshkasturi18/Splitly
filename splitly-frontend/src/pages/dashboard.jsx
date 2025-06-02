import { useState } from "react";

export default function Dashboard() {
  const [groups, setGroups] = useState([
    { id: 1, name: "Goa Trip", members: 4 },
    { id: 2, name: "Office Lunch", members: 3 },
  ]);
  const [isCreateOpen, setCreateOpen] = useState(false);
  const [isJoinOpen, setJoinOpen] = useState(false);
  const [newGroupName, setNewGroupName] = useState("");
  const [joinCode, setJoinCode] = useState("");

  const handleCreateGroup = () => {
    if (!newGroupName) return;
    setGroups([...groups, { id: Date.now(), name: newGroupName, members: 1 }]);
    setNewGroupName("");
    setCreateOpen(false);
  };

  const handleJoinGroup = () => {
    if (!joinCode) return;
    setGroups([
      ...groups,
      { id: Date.now(), name: `Joined Group ${joinCode}`, members: 1 },
    ]);
    setJoinCode("");
    setJoinOpen(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Groups</h1>
        <div className="space-x-2">
          <button
            className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700"
            onClick={() => setCreateOpen(true)}
          >
            Create Group
          </button>
          <button
            className="border border-violet-600 text-violet-600 px-4 py-2 rounded hover:bg-violet-50"
            onClick={() => setJoinOpen(true)}
          >
            Join Group
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((group) => (
          <div
            key={group.id}
            className="border rounded-lg p-4 hover:shadow-xl cursor-pointer"
          >
            <h2 className="text-xl font-semibold">{group.name}</h2>
            <p className="text-sm text-gray-500">{group.members} members</p>
          </div>
        ))}
      </div>

      {/* Create Group Modal */}
      {isCreateOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6">
            <h2 className="text-lg font-bold mb-4">Create New Group</h2>
            <input
              type="text"
              placeholder="Enter group name"
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
              className="w-full border p-2 rounded mb-4"
            />
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-200 rounded"
                onClick={() => setCreateOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-700"
                onClick={handleCreateGroup}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Join Group Modal */}
      {isJoinOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6">
            <h2 className="text-lg font-bold mb-4">Join Group</h2>
            <input
              type="text"
              placeholder="Enter group code"
              value={joinCode}
              onChange={(e) => setJoinCode(e.target.value)}
              className="w-full border p-2 rounded mb-4"
            />
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-200 rounded"
                onClick={() => setJoinOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-700"
                onClick={handleJoinGroup}
              >
                Join
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
