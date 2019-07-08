@extends('default')

@section('content')

<div class="section">
	<div class="container">
		<h1 class="title">E19 Object-Oriented Forms: Part 1</h1>

		@include('includes.listFormE19')

		<form method="POST" action="/formE19" @submit.prevent="onSubmit" @keydown='clearInput($event.target.name)'>
			@csrf
			<div class="field">
				<label class="label">Project Name</label>
				<div class="control">
					<input class="input" name="name" type="text" v-model='name'>
				<span v-if="errors.name" class="help is-danger" v-text="getErrors(errors.name)"></span>
				</div>
			</div>

			<div class="field">
				<label class="label">Description</label>
				<div class="control">
					<input class="input"  type="text" name="description" v-model='description'>
				</div>
				<span v-if="errors.description" v-text="getErrors(errors.description)" class="help is-danger">The description field is required</span>
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
