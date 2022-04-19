create table clothing_item_categories (
    id serial primary key,
    clothing_item_category_name varchar ( 50 ) not null unique
);

insert into clothing_item_categories(clothing_item_category_name) values('MENS');
insert into clothing_item_categories(clothing_item_category_name) values('WOMENS');
insert into clothing_item_categories(clothing_item_category_name) values('ACCESSORY');


create table clothing_item_statuses (
    id serial primary key,
    clothing_item_status_name varchar ( 50 ) not null unique
);
insert into clothing_item_statuses(clothing_item_status_name) values('PACKED');
insert into clothing_item_statuses(clothing_item_status_name) values('OUT');
insert into clothing_item_statuses(clothing_item_status_name) values('RETURNED');
insert into clothing_item_statuses(clothing_item_status_name) values('READY');


create table clothing_item_conditions (
    id serial primary key,
    clothing_item_condition_name varchar ( 50 ) not null unique
);
insert into clothing_item_conditions(clothing_item_condition_name) values ('CLEAN');
insert into clothing_item_conditions(clothing_item_condition_name) values ('DIRTY');


create table clothing_item_types (
    id serial primary key,
    clothing_item_type_name varchar ( 50 ) not null unique
);
insert into clothing_item_types(clothing_item_type_name) values('TOP');
insert into clothing_item_types(clothing_item_type_name) values('BOTTOM');
insert into clothing_item_types(clothing_item_type_name) values('SET');
insert into clothing_item_types(clothing_item_type_name) values('FOOTWEAR');

create table clothing_item_sizes (
    id serial primary key,
    clothing_item_size varchar ( 50 ) not null unique
);
insert into clothing_item_sizes(clothing_item_size) values ('XS');
insert into clothing_item_sizes(clothing_item_size) values ('S');
insert into clothing_item_sizes(clothing_item_size) values ('M');
insert into clothing_item_sizes(clothing_item_size) values ('L');
insert into clothing_item_sizes(clothing_item_size) values ('XL');
insert into clothing_item_sizes(clothing_item_size) values ('XXL');

create table clothing_items (
    id serial primary key,
    clothing_item_type varchar ( 50 ) references clothing_item_types(clothing_item_type_name) not null,
    clothing_item_category varchar ( 50 ) references clothing_item_categories(clothing_item_category_name) not null,
    clothing_item_status varchar ( 50 ) references clothing_item_statuses(clothing_item_status_name) not null,
    clothing_item_condition varchar ( 50 ) references clothing_item_conditions(clothing_item_condition_name) not null,
    clothing_item_size varchar ( 50 ) references clothing_item_sizes(clothing_item_size),
    clothing_item_description varchar ( 250 )
);

create table orders (
    id serial primary key,
    pickup_date_time date not null,
    return_date_time date not null,
    client_first_name varchar ( 50 ) not null,
    client_last_name varchar ( 50 ) not null,
    client_email varchar ( 50 ) not null,
    clothing_item_id int references clothing_items(id)
);


