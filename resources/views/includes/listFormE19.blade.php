
<div class="list is-hoverable">
	@foreach ($messages as $message)

		<p class="list-item"> {{ $message->name }} </p>

	@endforeach

</div>
