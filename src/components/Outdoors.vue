<template>
	<div class="bg-white padding-25 white-box h-100">
		<h4 class="mt-0 box-title">Outdoors</h4>
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
										Name
									</th>
									<th
										tabindex="0"
										aria-controls="example"
										rowspan="1"
										colspan="1"
										aria-label="Position: activate to sort column ascending"
									>
										Description
									</th>
									<th
										tabindex="0"
										aria-controls="example"
										rowspan="1"
										colspan="1"
										aria-label="Email: activate to sort column ascending"
									>
										Expected Duration
									</th>
									<th
										tabindex="0"
										aria-controls="example"
										rowspan="1"
										colspan="1"
										aria-label="Age: activate to sort column ascending"
									>
										Price
									</th>
									<th
										tabindex="0"
										aria-controls="example"
										rowspan="1"
										colspan="1"
										aria-label="Status: activate to sort column ascending"
									>
										Pictures/Reviews
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
									<td>Richard Cook</td>
									<td>
										Lorem ipsum dolor sit amet, consectetur
										adipisicing elit. Neque animi ut
										provident autem et maiores veniam
										recusandae, consequuntur ab culpa at
										quia nam dicta deserunt repudiandae
										veritatis laudantium, asperiores error.
									</td>
									<td>
										<a href="mailto:user@gmail.com"
											>user@gmail.com</a
										>
									</td>
									<td>33</td>
									<td>
										<span
											class="badge badge-pill badge-info text-uppercase"
											>Active</span
										>
									</td>
								</tr>
								<tr>
									<td>
										<div class="form-check">
											<div
												class="custom-control custom-checkbox custom-checkbox-success"
											>
												<input
													type="checkbox"
													class="custom-control-input"
													id="tableCheckbox3"
												/>
												<label
													class="custom-control-label"
													for="tableCheckbox3"
												></label>
											</div>
										</div>
									</td>
									<td>Richard Sevian</td>
									<td>
										Lorem ipsum dolor sit amet, consectetur
										adipisicing elit. Porro mollitia
										doloribus dolore officia ex saepe, in
										dicta quae corporis. Mollitia modi
										suscipit similique blanditiis iusto,
										qui, repellat dolor. Explicabo, aut.
									</td>
									<td>
										<a href="mailto:user@gmail.com"
											>user@gmail.com</a
										>
									</td>
									<td>47</td>
									<td>
										<span
											class="badge badge-pill badge-danger text-uppercase"
											>Inactive</span
										>
									</td>
								</tr>
								<tr>
									<td>
										<div class="form-check">
											<div
												class="custom-control custom-checkbox custom-checkbox-info"
											>
												<input
													type="checkbox"
													class="custom-control-input"
													id="tableCheckbox4"
													checked
												/>
												<label
													class="custom-control-label"
													for="tableCheckbox4"
												></label>
											</div>
										</div>
									</td>
									<td>Mary Cruise</td>
									<td>
										Lorem ipsum dolor sit amet, consectetur
										adipisicing elit. Quae pariatur nostrum
										quo laboriosam commodi, asperiores modi,
										eum recusandae dolorem voluptates beatae
										odit nisi mollitia reprehenderit
										adipisci ea culpa labore, dolorum.
									</td>
									<td>
										<a href="mailto:user@gmail.com"
											>user@gmail.com</a
										>
									</td>
									<td>66</td>
									<td>
										<span
											class="badge badge-pill badge-secondary text-uppercase"
											>Disabled</span
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
	name: "Outdoors"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
