<?php
	require_once './db/dbCleverbuys_dbManager.php';
	
/*
 * SCHEMA DB brands
 * 
	{
		name: {
			type: 'String', 
			required : true
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


$app->post('/brands',	function () use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'name'	=> $body->name,
		
	);

	$obj = makeQuery("INSERT INTO brands (_id, name )  VALUES ( null, :name   )", $params, false);
    
	
	echo json_encode($body);
	
});
	
//CRUD - REMOVE

$app->delete('/brands/:id',	function ($id) use ($app){
	
	$params = array (
		'id'	=> $id,
	);

	makeQuery("DELETE FROM brands WHERE _id = :id LIMIT 1", $params);

});
	
//CRUD - GET ONE
	
$app->get('/brands/:id',	function ($id) use ($app){
	$params = array (
		'id'	=> $id,
	);
	
	$obj = makeQuery("SELECT * FROM brands WHERE _id = :id LIMIT 1", $params, false);
	
	
	
	echo json_encode($obj);
	
});
	
	
//CRUD - GET LIST

$app->get('/brands',	function () use ($app){
	makeQuery("SELECT * FROM brands");
});


//CRUD - EDIT

$app->post('/brands/:id',	function ($id) use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'id'	=> $id,
		'name'	    => $body->name
	);

	$obj = makeQuery("UPDATE brands SET  name = :name   WHERE _id = :id LIMIT 1", $params, false);
    
	
	echo json_encode($body);
    	
});


/*
 * CUSTOM SERVICES
 *
 *	These services will be overwritten and implemented in  Custom.js
 */

			
?>