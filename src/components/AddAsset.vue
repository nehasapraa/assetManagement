<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Add Asset
        <b-link href="/">(Asset List)</b-link>
      </h2>
      <b-form @submit="onSubmit">
        <b-form-group
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Asset Name">
          <b-form-input id="asset_name" v-model.trim="asset.asset_name" type="text" required></b-form-input>
        </b-form-group>
        <b-form-group
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Shopping Center">
          <b-form-select v-model.trim="asset.center_id" id="center_id" required>
             <option v-for="option in centers.options"
               :key = "option.id"
               :value = "option.id"
               :selected = "centers.selected"
             >
               {{ option.center_name }}
             </option>
          </b-form-select>
        </b-form-group>
        <b-form-group
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Asset Length">
          <b-form-input id="asset_length" v-model.trim="asset.asset_length" type="number"></b-form-input>
        </b-form-group>
        <b-form-group
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Asset Breadth">
          <b-form-input id="asset_breadth"  v-model.trim="asset.asset_breadth" type="number"></b-form-input>
        </b-form-group>
        <b-form-group
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Asset Width">
          <b-form-input id="asset_width"  v-model.trim="asset.asset_width" type="number"></b-form-input>
        </b-form-group>
        <b-form-group
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Location">
          <b-form-textarea id="location"
                   v-model="asset.location_details"
                   placeholder="Location Details"
                   :rows="2"
                   :max-rows="6">{{asset.location_details}}</b-form-textarea>
        </b-form-group>
        <b-form-group
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Status">
          <b-form-radio-group id="status" v-model="asset.status" name="radio-sub-component">
            <b-form-radio v-model="asset.status" name="status" value="true">    Active</b-form-radio>
            <b-form-radio v-model="asset.status" name="status" value="false"> Inactive</b-form-radio>
          </b-form-radio-group>
          </b-form-group>
        <b-button type="submit" variant="primary">Save</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'AddAsset',
  data () {
    return {
      asset: { status: 'true' },
      centers: {
        selected: '1',
        options: []
      },
      activated: []
    }
  },
  created: function getOptions () {
    axios.get(process.env.API_URL + `/shopping-centers`)
      .then(response => {
        this.centers.options = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },

  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.post(process.env.API_URL + `/add-asset`, this.asset)
        .then(response => {
          this.$router.push({
            name: 'AssetsList'
          })
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>
<style>
  .custom-select {
    min-width: 1116px;
  }
  .status{
    position: absolute;
    left: 0;
  }
</style>
