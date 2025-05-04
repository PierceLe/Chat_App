create table user
(
    user_id               varchar(36)  not null
        primary key,
    username              varchar(50)  null,
    display_name          varchar(100) null,
    avatar_url            varchar(500) null,
    password              varchar(255) not null,
    email                 varchar(255) not null,
    first_name            varchar(100) null,
    last_name             varchar(100) null,
    is_verified           tinyint(1)   null,
    use_2fa_login         tinyint(1)   not null,
    two_factor_secret     varchar(255) null,
    public_key            varchar(255) null,
    encrypted_private_key varchar(255) null,
    salt                  varchar(255) null,
    method                varchar(255) null,
    pin                   varchar(500) null
);

create index user_username_index
    on user (username);


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
    encrypted_group_key varchar(500) null
);
