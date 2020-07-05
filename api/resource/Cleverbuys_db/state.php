<?php
	require_once './db/dbCleverbuys_dbManager.php';
	
/*
 * SCHEMA DB state
 * 
	{
		name: {
			type: 'String', 
			required : true
		},
		shortName: {
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


$app->post('/state',	function () use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'name'	=> $body->name,
		'shortName'	=> $body->shortName,
			);

	$obj = makeQuery("INSERT INTO state (_id, name, shortName )  VALUES ( null, :name, :shortName   )", $params, false);

	
	echo json_encode($body);
	
});
	
//CRUD - REMOVE

$app->delete('/state/:id',	function ($id) use ($app){
	
	$params = array (
		'id'	=> $id,
	);

	makeQuery("DELETE FROM state WHERE _id = :id LIMIT 1", $params);

});
	
//CRUD - GET ONE
	
$app->get('/state/:id',	function ($id) use ($app){
	$params = array (
		'id'	=> $id,
	);
	
	$obj = makeQuery("SELECT * FROM state WHERE _id = :id LIMIT 1", $params, false);
	
	
	
	echo json_encode($obj);
	
});
	
	
//CRUD - GET LIST

$app->get('/state',	function () use ($app){
	makeQuery("SELECT * FROM state");
});


//CRUD - EDIT

$app->post('/state/:id',	function ($id) use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'id'	=> $id,
		'name'	    => $body->name,
		'shortName'	    => $body->shortName	);

	$obj = makeQuery("UPDATE state SET  name = :name,  shortName = :shortName   WHERE _id = :id LIMIT 1", $params, false);

	
	echo json_encode($body);
    	
});


/*
 * CUSTOM SERVICES
 *
 *	These services will be overwritten and implemented in  Custom.js
 */

			
?>