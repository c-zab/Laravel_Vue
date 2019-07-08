<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Message;

class FormE19Controller extends Controller
{
    public function index()
    {
        $messages = Message::all();

        return view('pages.form1', ['messages' => $messages]);
    }

    public function storage(Request $request)
    {
        $validateData = $request->validate([
            'name' => 'required',
            'description' => 'required'
        ]);

        $post = new Message();
        $post->name = request('name');
        $post->description = request('description');
        $post->save();

        // return redirect()->action('FormE19Controller@index');
        return ['message' => 'Project created!'];
    }
}
