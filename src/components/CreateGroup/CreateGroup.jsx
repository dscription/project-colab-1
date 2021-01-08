import React from 'react';
import * as U from '../../components/TuxComponents/UniversalComponents';

const CreateGroup = ({
  setNewGroupName,
  newGroupName,
  handleCreateGroup,
  createGroup,
  setCreateGroup,
}) => {
  const createNewGroup = () => {
    handleCreateGroup();
    setCreateGroup(!createGroup);
  };
  return (
    <>
      <h1>Group: None</h1>
      <label>Group Name</label>
      <input
        type="text"
        placeholder="Add group name here"
        onChange={(e) => setNewGroupName(e.target.value)}
        value={newGroupName}
      />
      <U.WideBtn teal onClick={createNewGroup}>
        Create Group
      </U.WideBtn>
    </>
  );
};

export default CreateGroup;
