@extends('default')

@section('content')

	<div id='form' class="section" v-cloak>
		<div class="container">
			<h1 class="title">E19 Object-Oriented Forms: Part 1</h1>

			<list-name-project :projects='projects' v-if='projects.length > 0'></list-name-project>

			<form method="POST" action="/formE19" @submit.prevent='onSubmit' @keydown="form.errors.clear($event.target.name)">
				@csrf
				<div class="field">
					<label class="label">Project Name</label>
					<div class="control">
						<input class="input" name="name" type="text" v-model="form.name">
          </div>
          <p class="help is-danger" v-if="form.errors.has('name')" v-text='form.errors.get("name")'></p>
				</div>

				<div class="field">
					<label class="label">Description</label>
					<div class="control">
						<input class="input" type="text" name="description" v-model='form.description'>
					</div>
					<p class="help is-danger" v-if="form.errors.has('description')" v-text='form.errors.get("description")'></p>
				</div>

				<div class="field is-grouped">
					<div class="control">
						<button class="button is-link" :class='{"is-loading": form.isLoading}' name='submit' :disabled='form.errors.any()'>Submit</button>
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
