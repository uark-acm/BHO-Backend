create table bho_item_set(
    id int not null primary key,
    set_type varchar(256) not null
);

create table bho_item_category(
    id int not null primary key,
    category_name varchar(256) not null,
    sizes varchar(256)[] not null
);

create table bho_item(
    id int not null primary key,
    item_name varchar(256) not null,
    in_stock bit not null,
    item_description varchar(1024) not null,
    category_id int not null references bho_item_category,
    size varchar(256),
    item_image_url varchar(1024) not null,
    set_id int references bho_item_set
);

create table bho_order(
    id int not null primary key,
    username varchar(256) not null,
    user_email varchar(256) not null,
    user_college varchar(256) not null,
    user_is_international bit not null,
    user_reason varchar(1024),
    event_date timestamp,
    order_placed timestamp not null,
    requested_pickup timestamp not null,
    order_status varchar(256) not null
);

create table borrow_request(
    id int not null primary key,
    item_id int not null references bho_item,
    order_id int not null references bho_order,
    date_out timestamp,
    date_in timestamp
);

