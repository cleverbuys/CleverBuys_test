<?php
//dependency import
require 'properties.php';
require 'lib/Slim/Slim.php';
require 'security/Security.php';

//init Slim Framework
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();
$app->add(new \Security($app));
require 'security/Login.php';
require 'security/ManageUser.php';

//resources
	//db Cleverbuys_db
		require('./resource/Cleverbuys_db/custom/UserCustom.php');
		require('./resource/Cleverbuys_db/User.php');
		require('./resource/Cleverbuys_db/custom/brandsCustom.php');
		require('./resource/Cleverbuys_db/brands.php');
		require('./resource/Cleverbuys_db/custom/dealerBrandsCustom.php');
		require('./resource/Cleverbuys_db/dealerBrands.php');
		require('./resource/Cleverbuys_db/custom/dealershipCustom.php');
		require('./resource/Cleverbuys_db/dealership.php');
		require('./resource/Cleverbuys_db/custom/stateCustom.php');
		require('./resource/Cleverbuys_db/state.php');
	

$app->run();


?>
