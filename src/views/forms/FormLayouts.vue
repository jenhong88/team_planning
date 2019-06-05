<template>
	<div class="vx-row">

		<!-- HORIZONTAL LAYOUT -->
		<div class="vx-col md:w-1/1 w-full mb-base">
			<vx-card title="Send a poll">
				<div class="vx-row mb-6">
					<div class="vx-col sm:w-1/5 w-full">
						<span>Activity #1</span>
					</div>
					<div class="vx-col sm:w-4/5 w-full">
						<vs-input class="w-full" v-model="input1" />
					</div>
				</div>
				<div class="vx-row mb-6">
					<div class="vx-col sm:w-1/5 w-full">
						<span>Activity #2</span>
					</div>
					<div class="vx-col sm:w-4/5 w-full">
						<vs-input class="w-full" v-model="input2" />
					</div>
				</div>
				<div class="vx-row mb-6">
					<div class="vx-col sm:w-1/5 w-full">
						<span>Activity #3</span>
					</div>
					<div class="vx-col sm:w-4/5 w-full">
						<vs-input class="w-full" v-model="input3" />
					</div>
				</div>
				<div class="vx-row mb-6">
					<div class="vx-col sm:w-1/5 w-full">
						<span>Activity #4</span>
					</div>
					<div class="vx-col sm:w-4/5 w-full">
						<vs-input class="w-full" v-model="input4" />
					</div>
				</div>
				<!-- <div class="vx-row mb-6">
					<div class="vx-col sm:w-2/3 w-full ml-auto">
						<vs-checkbox class="inline-flex" v-model="check1">Remember Me</vs-checkbox>
					</div>
				</div> -->
				<div class="vx-row">
					<div class="vx-col sm:w-2/3 w-full ml-auto">
						<vs-button class="mr-3 mb-2">Send</vs-button>
						<!-- <vs-button color="warning" type="border" class="mb-2" @click="input1 = input2 = input3 = input4 = input4 = ''; check1 = false;">Reset</vs-button> -->
					</div>
				</div>

        <!-- CODE -->
        <template slot="codeContainer">
&lt;template&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;First Name&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; v-model=&quot;input1&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Email&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; type=&quot;email&quot; v-model=&quot;input2&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Mobile&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; v-model=&quot;input3&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Password&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; type=&quot;password&quot; v-model=&quot;input4&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full ml-auto&quot;&gt;
        &lt;vs-checkbox class=&quot;inline-flex&quot; v-model=&quot;check1&quot;&gt;Remember Me&lt;/vs-checkbox&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full ml-auto&quot;&gt;
        &lt;vs-button class=&quot;mr-3 mb-2&quot;&gt;Submit&lt;/vs-button&gt;
        &lt;vs-button color=&quot;warning&quot; type=&quot;border&quot; class=&quot;mb-2&quot; @click=&quot;input1 = input2 = input3 = input4 = input4 = ''; check1 = false;&quot;&gt;Reset&lt;/vs-button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;
        </template>
			</vx-card>
		</div>

	</div>
</template>

<script>
export default{
	data() {
		return {
			check1: '',
			check2: '',
			check3: '',
			check4: '',
			check5: '',
			check6: '',
			check7: '',
			input1: 'Africa',
			input2: 'Budapest',
			input3: 'Thailand',
			input4: 'New York',
			input5: '',
			input6: '',
			input7: '',
			input8: '',
			input9: '',
			input10: '',
			input11: '',
			input12: '',
			input13: '',
			input14: '',
			input15: '',
			input16: '',
			input17: '',
			input18: '',
			input19: '',
			input20: '',
			input21: '',
			input22: '',
			input23: '',
			input24: '',
			input25: '',
			input26: '',
			input27: '',
			input28: '',
			input29: '',
			input30: '',
		}
	}
}
</script>
