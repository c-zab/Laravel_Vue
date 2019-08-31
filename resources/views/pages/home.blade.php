@extends('default')

@section('content')

	@include('includes.formE19')

	<div id="app" v-cloak>
		<app></app>
	</div>
	@push('scripts')
		<script src="/js/app.js"></script>
	@endpush
@stop
