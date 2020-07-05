<?php
	require_once './db/dbCleverbuys_dbManager.php';
	
/*
 * SCHEMA DB dealerBrands
 * 
	{
		brandID: {
			type: 'Number', 
			required : true
		},
		dealershipID: {
			type: 'Number', 
			required : true
		},
		//RELAZIONI
		
		
		//RELAZIONI ESTERNE
		
		
	}
 * 
 */


//CRUD METHODS


//CRUD - CREATE


$app->post('/dealerbrands',	function () use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'brandID'	=> $body->brandID,
		'dealershipID'	=> $body->dealershipID,
			);

	$obj = makeQuery("INSERT INTO dealerbrands (_id, brandID, dealershipID )  VALUES ( null, :brandID, :dealershipID   )", $params, false);

	
	echo json_encode($body);
	
});
	
//CRUD - REMOVE

$app->delete('/dealerbrands/:id',	function ($id) use ($app){
	
	$params = array (
		'id'	=> $id,
	);

	makeQuery("DELETE FROM dealerbrands WHERE _id = :id LIMIT 1", $params);

});
	
//CRUD - GET ONE
	
$app->get('/dealerbrands/:id',	function ($id) use ($app){
	$params = array (
		'id'	=> $id,
	);
	
	$obj = makeQuery("SELECT * FROM dealerbrands WHERE _id = :id LIMIT 1", $params, false);
	
	
	
	echo json_encode($obj);
	
});
	
	
//CRUD - GET LIST

$app->get('/dealerbrands',	function () use ($app){
	makeQuery("SELECT * FROM dealerbrands");
});


//CRUD - EDIT

$app->post('/dealerbrands/:id',	function ($id) use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'id'	=> $id,
		'brandID'	    => $body->brandID,
		'dealershipID'	    => $body->dealershipID	);

	$obj = makeQuery("UPDATE dealerbrands SET  brandID = :brandID,  dealershipID = :dealershipID   WHERE _id = :id LIMIT 1", $params, false);

	
	echo json_encode($body);
    	
});


/*
 * CUSTOM SERVICES
 *
 *	These services will be overwritten and implemented in  Custom.js
 */

			
?>