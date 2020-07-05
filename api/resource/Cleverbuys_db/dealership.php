<?php
	require_once './db/dbCleverbuys_dbManager.php';
	
/*
 * SCHEMA DB dealership
 * 
	{
		email: {
			type: 'String', 
			required : true
		},
		name: {
			type: 'String', 
			required : true
		},
		telephone: {
			type: 'Number'
		},
		town: {
			type: 'String', 
			required : true
		},
		website: {
			type: 'String'
		},
		//RELAZIONI
		
		
		//RELAZIONI ESTERNE
		
		brands: {
			type: Schema.ObjectId,
			ref : "dealership"
		},
		
	}
 * 
 */


//CRUD METHODS


//CRUD - CREATE


$app->post('/dealership',	function () use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'email'	=> $body->email,
		'name'	=> $body->name,
		'telephone'	=> isset($body->telephone)?$body->telephone:'',
		'town'	=> $body->town,
		'website'	=> isset($body->website)?$body->website:'',
		
		'brands' => isset($body->brands)?$body->brands:'',
	);

	$obj = makeQuery("INSERT INTO dealership (_id, email, name, telephone, town, website , brands )  VALUES ( null, :email, :name, :telephone, :town, :website , :brands   )", $params, false);
    
	
	echo json_encode($body);
	
});
	
//CRUD - REMOVE

$app->delete('/dealership/:id',	function ($id) use ($app){
	
	$params = array (
		'id'	=> $id,
	);

	makeQuery("DELETE FROM dealership WHERE _id = :id LIMIT 1", $params);

});

//CRUD - FIND BY brands

$app->get('/dealership/findBybrands/:key',	function ($key) use ($app){	

	$params = array (
		'key'	=> $key,
	);
	makeQuery("SELECT * FROM dealership WHERE brands = :key", $params);
	
});
	
//CRUD - GET ONE
	
$app->get('/dealership/:id',	function ($id) use ($app){
	$params = array (
		'id'	=> $id,
	);
	
	$obj = makeQuery("SELECT * FROM dealership WHERE _id = :id LIMIT 1", $params, false);
	
	
	
	echo json_encode($obj);
	
});
	
	
//CRUD - GET LIST

$app->get('/dealership',	function () use ($app){
	makeQuery("SELECT * FROM dealership");
});


//CRUD - EDIT

$app->post('/dealership/:id',	function ($id) use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'id'	=> $id,
		'email'	    => $body->email,
		'name'	    => $body->name,
		'telephone'	    => isset($body->telephone)?$body->telephone:'',
		'town'	    => $body->town,
		'website'	    => isset($body->website)?$body->website:'',
		'brands'      => isset($body->brands)?$body->brands:'' 
	);

	$obj = makeQuery("UPDATE dealership SET  email = :email,  name = :name,  telephone = :telephone,  town = :town,  website = :website  , brands=:brands  WHERE _id = :id LIMIT 1", $params, false);
    
	
	echo json_encode($body);
    	
});


/*
 * CUSTOM SERVICES
 *
 *	These services will be overwritten and implemented in  Custom.js
 */

			
?>