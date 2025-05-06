CREATE TABLE user (
    user_id VARCHAR(36) NOT NULL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(500) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    avatar_url VARCHAR(500),
    is_verified BOOLEAN DEFAULT FALSE,
    use_2fa_login BOOLEAN DEFAULT FALSE,
    two_factor_secret VARCHAR(255),
    method VARCHAR(255),
    salt VARCHAR(500),
    pin                   text         null,
    public_key text         null,
    encrypted_private_key text         null,
    biography VARCHAR(500),
    INDEX idx_user_email (email),
    INDEX idx_user_id (user_id)
);


-- 

create table room
(
    room_id        varchar(36)  not null
        primary key,
    room_name      varchar(50)  not null,
    last_mess      varchar(500) null,
    last_time      datetime     null,
    room_type      varchar(50)  null,
    avatar_url     varchar(500) null,
    creator_id     varchar(36)  not null,
    column_name    int          null,
    description    varchar(500) null,
    created_at     datetime     null,
    updated_at     datetime     null,
    last_sender_id varchar(36)  null
);

create index tbl_room_room_name_index
    on room (room_name);

-- 

create table user_room
(
    id                  varchar(36)  not null,
    user_id             varchar(36)  not null,
    room_id             varchar(36)  not null,
    encrypted_group_key text        null
);

CREATE TABLE friend_draft (
    id VARCHAR(36) NOT NULL PRIMARY KEY,
    user_id VARCHAR(36),
    friend_id VARCHAR(36),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY friend_draft_unique_constraint_1 (user_id, friend_id),
    INDEX idx_friend_draft_id (id)
);

CREATE TABLE friend (
    id VARCHAR(36) NOT NULL PRIMARY KEY,
    user_id VARCHAR(36),
    friend_id VARCHAR(36),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY friend_unique_constraint_1 (user_id, friend_id),
    INDEX idx_friend_id (id)
);

CREATE TABLE message (
    id VARCHAR(36) NOT NULL PRIMARY KEY,
    sender_id VARCHAR(36) NOT NULL,
    room_id VARCHAR(36) NOT NULL,
    message_type VARCHAR(500) NOT NULL,
    content      text         null,
    file_url VARCHAR(500),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_message_id (id)
);

CREATE TABLE task (
    task_id VARCHAR(36) NOT NULL PRIMARY KEY,
    room_id VARCHAR(36),
    task_name VARCHAR(100),
    task_description VARCHAR(500),
    assigner_id VARCHAR(36),
    assignee_id VARCHAR(36),
    status VARCHAR(12),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (room_id) REFERENCES room(room_id),
    INDEX idx_task_id (task_id)
);
