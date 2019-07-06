@extends('default')

@section('content')

<div class="section">
	<div class="container">
		<h1 class="title">E19 Object-Oriented Forms: Part 1</h1>
		<div class="list is-hoverable">
			<p class="list-item">
				Featureds
			</p>
		</div>

		<form method="POST" action="/formE19">
			@csrf
			<div class="field">
				<label class="label">Project Name</label>
				<div class="control">
					<input class="input" name="name" type="text" value="Nice title">
				</div>
			</div>

			<div class="field">
				<label class="label">Description</label>
				<div class="control">
					<input class="input" type="text" name="description" value="Here a description">
				</div>
				<p class="help is-success">There is a description</p>
			</div>

			<div class="field is-grouped">
				<div class="control">
					<button class="button is-link" name='submit'>Submit</button>
				</div>
				<div class="control">
					<a class="button is-danger" name='return' href="/" >Return</a>
				</div>
			</div>

		</form>
	</div>
</div>

@stop
