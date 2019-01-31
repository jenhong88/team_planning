<template>
    <div class="hello">
        <!-- <h1>{{ msg }}</h1> -->
        <!-- <p>{{ weather }}</p> -->
        <!--
      <GmapMap
        :center="{lat:40.7128, lng:-74.0060}"
        :zoom="7"
        map-type-id="terrain"
        style="width: 100%; height: 300px"
      >
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
        />
      </GmapMap>
    -->
        <div class="row tile-count">
            <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 tile-stats-count">
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-6">
                        <!-- <i class="fa fa-pencil-square-o" aria-hidden="true"></i> -->
                        <h5 class="text-muted text-uppercase">Outdoorsy</h5>
                    </div>
                    <!--           <div class="col-md-6 col-sm-6 col-6">
            <h3 class="counter text-right m-t-15 text-info">168</h3>
          </div> -->
                    <div class="col-12">
                        <div class="progress progress-sm">
                            <div class="progress-bar bg-info" role="progressbar" style="width: 100%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 tile-stats-count">
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-6">
                        <!-- <i class="fa fa-files-o" aria-hidden="true"></i> -->
                        <h5 class="text-muted text-uppercase">Music Concerts</h5>
                    </div>
                    <!--           <div class="col-md-6 col-sm-6 col-6">
            <h3 class="counter text-right m-t-15 text-primary">123</h3>
          </div> -->
                    <div class="col-12">
                        <div class="progress progress-sm">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: 100%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 tile-stats-count">
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-6">
                        <!-- <i class="fa fa-users" aria-hidden="true"></i> -->
                        <h5 class="text-muted text-uppercase">Unique Events</h5>
                    </div>
                    <!-- <div class="col-md-6 col-sm-6 col-6"> -->
                    <!-- <h3 class="counter text-right m-t-15 text-danger">34</h3> -->
                    <!-- </div> -->
                    <div class="col-12">
                        <div class="progress progress-sm">
                            <div class="progress-bar bg-danger" role="progressbar" style="width: 100%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 tile-stats-count">
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-6">
                        <!-- <i class="fa fa-shopping-bag" aria-hidden="true"></i> -->
                        <h5 class="text-muted text-uppercase">Night Life</h5>
                    </div>
                    <!-- <div class="col-md-6 col-sm-6 col-6"> -->
                    <!-- <h3 class="counter text-right m-t-15 text-success">570</h3> -->
                    <!-- </div> -->
                    <div class="col-12">
                        <div class="progress progress-sm">
                            <div class="progress-bar bg-success" role="progressbar" style="width: 100%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 col-xl-12 m-b-10">
                <div class="bg-white padding-25 white-box h-100">
                    <h4 class="mt-0 box-title">Checkable data table</h4>
                    <div class="data-table-wrapper">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="table-responsive">
                                    <table id="example2" class="table table-striped table-bordered data-table table-checkable" cellspacing="0" role="grid">
                                        <thead>
                                            <tr>
                                                <th tabindex="0" aria-controls="example" rowspan="1" colspan="1">
                                                    <!-- <div class="form-check">
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" id="tableCheckbox1">
                                                            <label class="custom-control-label" for="tableCheckbox1"></label>
                                                        </div>
                                                    </div> -->
                                                </th>
                                                <th tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Name: activate to sort column descending">
                                                    Name
                                                </th>
                                                <th tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Position: activate to sort column ascending">Description
                                                </th>
                                                <th tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Email: activate to sort column ascending">
                                                    Expected Duration
                                                </th>
                                                <th tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Age: activate to sort column ascending">Price
                                                </th>
                                                <th tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending">
                                                    Pictures/Reviews
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div class="form-check">
                                                        <div class="custom-control custom-checkbox custom-checkbox-primary">
                                                            <input type="checkbox" class="custom-control-input" id="tableCheckbox2" checked>
                                                            <label class="custom-control-label" for="tableCheckbox2"></label>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Richard Cook</td>
                                                <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque animi ut provident autem et maiores veniam recusandae, consequuntur ab culpa at quia nam dicta deserunt repudiandae veritatis laudantium, asperiores error.</td>
                                                <td><a href="mailto:user@gmail.com">user@gmail.com</a></td>
                                                <td>33</td>
                                                <td><span class="badge badge-pill badge-info text-uppercase">Active</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="form-check">
                                                        <div class="custom-control custom-checkbox custom-checkbox-success">
                                                            <input type="checkbox" class="custom-control-input" id="tableCheckbox3">
                                                            <label class="custom-control-label" for="tableCheckbox3"></label>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Richard Sevian</td>
                                                <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro mollitia doloribus dolore officia ex saepe, in dicta quae corporis. Mollitia modi suscipit similique blanditiis iusto, qui, repellat dolor. Explicabo, aut.</td>
                                                <td><a href="mailto:user@gmail.com">user@gmail.com</a></td>
                                                <td>47</td>
                                                <td><span class="badge badge-pill badge-danger text-uppercase">Inactive</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="form-check">
                                                        <div class="custom-control custom-checkbox custom-checkbox-info">
                                                            <input type="checkbox" class="custom-control-input" id="tableCheckbox4" checked>
                                                            <label class="custom-control-label" for="tableCheckbox4"></label>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Mary Cruise</td>
                                                <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae pariatur nostrum quo laboriosam commodi, asperiores modi, eum recusandae dolorem voluptates beatae odit nisi mollitia reprehenderit adipisci ea culpa labore, dolorum.</td>
                                                <td><a href="mailto:user@gmail.com">user@gmail.com</a></td>
                                                <td>66</td>
                                                <td><span class="badge badge-pill badge-secondary text-uppercase">Disabled</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    name: "Calendar",
    data() {
        return {
            msg: "WELCOME TO TEAMDREAM",
            weather: ""
        };
    },
    created() {
        // axios
        //   .get(
        //     `http://api.openweathermap.org/data/2.5/forecast?q=New_York&APPID=dc7d08d80be0c3aa1fbd760521de9b5a`
        //   )
        //   .then(response => {
        //     this.weather = response.data;
        //     console.log(response.data);
        //   })
        //   .catch(e => {
        //     this.errors.push(e);
        //   });
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
    list-style: none;
}
</style>