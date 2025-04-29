import React from 'react';
import { useDrag } from 'react-dnd';
import { Task, User } from '../types';
import { Avatar } from 'antd';

interface TaskCardProps {
  task: Task;
  users: User[];
}

const TaskCard: React.FC<TaskCardProps> = ({ task, users }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'TASK',
    item: { id: task.task_id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const assignedUser = users.find((u) => u.user_id === task.assignee_id);

  return (
    <div
      ref={dragRef}
      style={{
        backgroundColor: '#fff',
        padding: '12px',
        border: '1px solid #ddd',
        borderRadius: '6px',
        marginBottom: '8px',
        opacity: isDragging ? 0.5 : 1,
        cursor: 'grab',
        boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
      }}
    >
      <div style={{ fontWeight: 'bold', marginBottom: '6px', fontSize: '1.1em' }}>
        {task.task_name}
      </div>

      {assignedUser && (
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 4 }}>
          <Avatar
            size={25}
            src={
              assignedUser.avatar_url === 'default'
                ? 'assets/img/profiles/avatar-16.jpg'
                : `http://localhost:9990/${assignedUser.avatar_url}`
            }
          />
          <span style={{ fontSize: '0.9em', marginLeft: '4px' }}>{`${assignedUser.first_name} ${assignedUser.last_name}`}</span>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
