import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import { Task, User } from '../types';
import { Avatar, Button, Col, Modal, Row } from 'antd';
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import httpRequest from '@/core/api/baseAxios';
import { notify } from '@/core/utils/notification';
import { formatDate } from './helper'

interface TaskCardProps {
  task: Task;
  users: User[];
  loadTasks: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, users, loadTasks }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'TASK',
    item: { id: task.task_id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleViewDetails = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const assignedUser = users.find((u) => u.user_id === task.assignee_id);
  const assignerUser = users.find((u) => u.user_id === task.assigner_id);
  const MySwal = withReactContent(Swal);

  const handleDelete = () => {
    MySwal.fire({
      title: 'Confirm deletion?',
      html:`Are you sure you want to delete task <b>${task.task_name}</b>?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await httpRequest.delete(`/task/${task.task_id}`, {
            headers: {
              'accept': 'application/json'
            }
          })
          notify.success("Delete task successfully !")
          loadTasks();
        } catch {
          notify.error("Error", "Delete task failed !")
        }
      }
    });
  };

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
      <div className='d-flex w-100 justify-content-between'>
        <span style={{
          fontWeight: 'bold',
          marginBottom: '6px',
          fontSize: '1.0em',
          maxWidth: '160px',
          display: 'inline-block',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {task.task_name}
        </span>
        <EyeOutlined
          onClick={handleViewDetails}
          style={{
            fontSize: '16px',
            color: 'oklch(70.7% 0.165 254.624)',
            cursor: 'pointer',
          }}
        />
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
          <div className='d-flex w-100 justify-content-between'>
            <span style={{ fontSize: '0.9em', marginLeft: '4px' }}>{`${assignedUser.first_name} ${assignedUser.last_name}`}</span>
            <DeleteOutlined
              onClick={handleDelete}
              style={{
              fontSize: '16px',
              color: '#ff4d4f',
              cursor: 'pointer',
            }}
          />
          </div>
        </div>
      )}

      <Modal
        title="Task Details"
        visible={isModalVisible}
        onCancel={handleCloseModal}
        footer={[
          <Button key="close" onClick={handleCloseModal}>
            Close
          </Button>,
        ]}
      >
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <strong>Task Name:</strong>
          </Col>
          <Col span={16}>
            {task.task_name}
          </Col>

          <Col span={8}>
            <strong>Description:</strong>
          </Col>
          <Col span={16}>
            {task.task_description}
          </Col>

          <Col span={8}>
            <strong>Assigner:</strong>
          </Col>
          <Col span={16}>
            {assignerUser?.first_name} {assignerUser?.last_name}
          </Col>
          <Col span={8}>
            <strong>Assignee:</strong>
          </Col>
          <Col span={16}>
            {assignedUser?.first_name} {assignedUser?.last_name}
          </Col>
          <Col span={8}>
            <strong>Created at:</strong>
          </Col>
          <Col span={16}>
            {formatDate(task?.created_at)}
          </Col>
          <Col span={8}>
            <strong>Updated at:</strong>
          </Col>
          <Col span={16}>
            {formatDate(task?.updated_at)}
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

export default TaskCard;
