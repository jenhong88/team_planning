<template>
	<div class="bg-white padding-25 white-box h-100">
		<h4 class="mt-0 box-title">Music / Concerts</h4>
		<div class="data-table-wrapper">
			<div class="row">
				<div class="col-sm-12">
					<div class="table-responsive">
						<table
							id="example2"
							class="table table-striped table-bordered data-table table-checkable"
							cellspacing="0"
							role="grid"
						>
							<thead>
								<tr>
									<th
										tabindex="0"
										aria-controls="example"
										rowspan="1"
										colspan="1"
									>
									</th>
									<th
										tabindex="0"
										aria-controls="example"
										rowspan="1"
										colspan="1"
										aria-label="Name: activate to sort column descending"
									>
										Genre
									</th>
									<th
										tabindex="0"
										aria-controls="example"
										rowspan="1"
										colspan="1"
										aria-label="Position: activate to sort column ascending"
									>
										Artist
									</th>
									<th
										tabindex="0"
										aria-controls="example"
										rowspan="1"
										colspan="1"
										aria-label="Email: activate to sort column ascending"
									>
										Ticket Price
									</th>
									<th
										tabindex="0"
										aria-controls="example"
										rowspan="1"
										colspan="1"
										aria-label="Age: activate to sort column ascending"
									>
										Date & Time
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<div class="form-check">
											<div
												class="custom-control custom-checkbox custom-checkbox-primary"
											>
												<input
													type="checkbox"
													class="custom-control-input"
													id="tableCheckbox2"
													checked
												/>
												<label
													class="custom-control-label"
													for="tableCheckbox2"
												></label>
											</div>
										</div>
									</td>
									<td>Dubstep, EDM</td>
									<td>
										Dion Timmer
									</td>
									<td>
										$15-$20
									</td>
									<td>
										<span
											class="badge badge-pill badge-info text-uppercase"
											>Friday April 12,2019 10pm @ Republic Nola</span
										>
									</td>
								</tr>
								<tr>
									<td>
										<div class="form-check">
											<div
												class="custom-control custom-checkbox custom-checkbox-primary"
											>
												<input
													type="checkbox"
													class="custom-control-input"
													id="tableCheckbox2"
													checked
												/>
												<label
													class="custom-control-label"
													for="tableCheckbox2"
												></label>
											</div>
										</div>
									</td>
									<td>R & B</td>
									<td>
										Donnell Isaac
									</td>
									<td>
										$TBD
									</td>
									<td>
										<span
											class="badge badge-pill badge-info text-uppercase"
											>Sunday April 13,2019 10pm @ K-Tron</span
										>
									</td>
								</tr>
								<tr>
									<td>
										<div class="form-check">
											<div
												class="custom-control custom-checkbox custom-checkbox-primary"
											>
												<input
													type="checkbox"
													class="custom-control-input"
													id="tableCheckbox2"
													checked
												/>
												<label
													class="custom-control-label"
													for="tableCheckbox2"
												></label>
											</div>
										</div>
									</td>
									<td>Jazz</td>
									<td>
										Cradle of Filth
									</td>
									<td>
										$30-$60
									</td>
									<td>
										<span
											class="badge badge-pill badge-info text-uppercase"
											>Sunday April 14,2019 6pm @ House of Blues</span
										>
									</td>
								</tr>
								<tr>
									<td>
										<div class="form-check">
											<div
												class="custom-control custom-checkbox custom-checkbox-primary"
											>
												<input
													type="checkbox"
													class="custom-control-input"
													id="tableCheckbox2"
													checked
												/>
												<label
													class="custom-control-label"
													for="tableCheckbox2"
												></label>
											</div>
										</div>
									</td>
									<td>Jazz</td>
									<td>
										Jeremy Davenport
									</td>
									<td>
										FREE
									</td>
									<td>
										<span
											class="badge badge-pill badge-info text-uppercase"
											>Thursday April 11,2019 5:30pm @ Davenport Lounge, Ritz Carlton Hotel</span
										>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "music"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
