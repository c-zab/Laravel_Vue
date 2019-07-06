<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FormE19Controller extends Controller
{
    public function index()
    {
        return view(('pages.form1'));
    }

    public function storage()
    {
		// $post = new FormE19();
		// $post-> name
        return request()->all();
    }
}
