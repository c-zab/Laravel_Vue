<?php

Route::get('/', function () {
    return view('pages.home');
});

Route::get('skills', function(){
	return ['Laravel', 'PHP', 'Java', 'Python', 'C#'];
});

Route::get('/formE19', 'FormE19Controller@index');

Route::post('/formE19', 'FormE19Controller@storage');

Route::get('/project-list', 'FormE19Controller@getProjects');
