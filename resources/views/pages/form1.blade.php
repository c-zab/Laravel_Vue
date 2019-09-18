@extends('default')

@section('content')

	<div id='form' class="section" v-cloak>
		<div class="container">
			<h1 class="title">E19 Object-Oriented Forms: Part 1</h1>

			<list-name-project></list-name-project>

			<form method="POST" action="/formE19" @submit.prevent='onSubmit'>
				@csrf
				<div class="field">
					<label class="label">Project Name</label>
					<div class="control">
						<input class="input" name="name" type="text" v-model="name">
					</div>
				</div>

				<div class="field">
					<label class="label">Description</label>
					<div class="control">
						<input class="input" type="text" name="description" v-model='description'>
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

	@push('scripts')
		<script src="/js/form.js"></script>
	@endpush
@stop
