<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Message;

class FormE19Controller extends Controller
{
	public function index()
	{
		return view(('pages.form1'));
  }

  public function getProjects() {
    $projects = DB::table('messages')->pluck('name');
    return $projects;
  }

	public function storage()
	{
    $this->validate(request(), [
      'name' => 'required',
      'description' => 'required'
    ]);

    Message::forceCreate([
      'name' => request('name'),
      'description' => request('description')
    ]);

		// $post = new FormE19();
		// $post-> name
		return ['message' => 'Project created'];
	}
}
