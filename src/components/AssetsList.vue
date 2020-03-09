<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Asset List
        <b-link href="/#/add-asset">(Add Asset)</b-link>
      </h2>
      <b-table striped hover :items="assets" :fields="fields" :tbody-tr-class="rowClass" name="assetList">
      </b-table>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors" :key="error.message">
          {{error.message}}
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'AssetList',
  data () {
    return {
      fields: [
        { 'asset_name': { label: 'Name', sortable: true } },
        { 'shopping_center.center_name': { label: 'Shopping Center', sortable: true } },
        { 'location_details': { label: 'Location' } }
      ],
      assets: [],
      errors: []
    }
  },
  created () {
    axios.get(process.env.API_URL + `/assets`)
      .then(response => {
        this.assets = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },

  methods: {
    rowClass (item, type) {
      if (!item || type !== 'row') return
      if (item.status === false) return 'table-warning'
    }
  }
}
</script>
