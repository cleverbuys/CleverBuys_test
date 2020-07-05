<?php
	require_once './db/dbCleverbuys_dbManager.php';
	
/*
 * SCHEMA DB User
 * 
	{
		lat: {
			type: 'Number'
		},
		lng: {
			type: 'Number'
		},
		mail: {
			type: 'String'
		},
		name: {
			type: 'String'
		},
		password: {
			type: 'String', 
			required : true
		},
		postCode: {
			type: 'String'
		},
		roles: {
			type: 'String'
		},
		state: {
			type: 'String'
		},
		surname: {
			type: 'String'
		},
		town: {
			type: 'String'
		},
		username: {
			type: 'String', 
			required : true
		},
		//RELAZIONI
		
		
		//RELAZIONI ESTERNE
		
		
	}
 * 
 */


//CRUD METHODS


//CRUD - CREATE


$app->post('/user',	function () use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'lat'	=> isset($body->lat)?$body->lat:'',
		'lng'	=> isset($body->lng)?$body->lng:'',
		'mail'	=> isset($body->mail)?$body->mail:'',
		'name'	=> isset($body->name)?$body->name:'',
		'password'	=> $body->password,
		'postCode'	=> isset($body->postCode)?$body->postCode:'',
		'roles'	=> isset($body->roles)?$body->roles:'',
		'state'	=> isset($body->state)?$body->state:'',
		'surname'	=> isset($body->surname)?$body->surname:'',
		'town'	=> isset($body->town)?$body->town:'',
		'username'	=> $body->username,
			);

	$obj = makeQuery("INSERT INTO user (_id, lat, lng, mail, name, password, postCode, roles, state, surname, town, username )  VALUES ( null, :lat, :lng, :mail, :name, :password, :postCode, :roles, :state, :surname, :town, :username   )", $params, false);

	
	echo json_encode($body);
	
});
	
//CRUD - REMOVE

$app->delete('/user/:id',	function ($id) use ($app){
	
	$params = array (
		'id'	=> $id,
	);

	makeQuery("DELETE FROM user WHERE _id = :id LIMIT 1", $params);

});
	
//CRUD - GET ONE
	
$app->get('/user/:id',	function ($id) use ($app){
	$params = array (
		'id'	=> $id,
	);
	
	$obj = makeQuery("SELECT * FROM user WHERE _id = :id LIMIT 1", $params, false);
	
	
	
	echo json_encode($obj);
	
});
	
	
//CRUD - GET LIST

$app->get('/user',	function () use ($app){
	makeQuery("SELECT * FROM user");
});


//CRUD - EDIT

$app->post('/user/:id',	function ($id) use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'id'	=> $id,
		'lat'	    => isset($body->lat)?$body->lat:'',
		'lng'	    => isset($body->lng)?$body->lng:'',
		'mail'	    => isset($body->mail)?$body->mail:'',
		'name'	    => isset($body->name)?$body->name:'',
		'password'	    => $body->password,
		'postCode'	    => isset($body->postCode)?$body->postCode:'',
		'roles'	    => isset($body->roles)?$body->roles:'',
		'state'	    => isset($body->state)?$body->state:'',
		'surname'	    => isset($body->surname)?$body->surname:'',
		'town'	    => isset($body->town)?$body->town:'',
		'username'	    => $body->username	);

	$obj = makeQuery("UPDATE user SET  lat = :lat,  lng = :lng,  mail = :mail,  name = :name,  password = :password,  postCode = :postCode,  roles = :roles,  state = :state,  surname = :surname,  town = :town,  username = :username   WHERE _id = :id LIMIT 1", $params, false);

	
	echo json_encode($body);
    	
});


/*
 * CUSTOM SERVICES
 *
 *	These services will be overwritten and implemented in  Custom.js
 */


/*
 Name: changePassword
 Description: Change password of user from admin
 Params: 
 */
$app->post('/user/:id/changePassword',	function ($key) use ($app){	
	makeQuery("SELECT 'ok' FROM DUAL");
});
	
			
?>