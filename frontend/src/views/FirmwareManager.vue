<template>
  <v-container fluid>
    <h1 class="mb-5 font-weight-light">Firmware Manager</h1>
    <v-row>
      <p class="ma-1 ml-4 mb-5 font-weight-light">Latest firmware version:</p>
      <v-chip class="ml-2" color="green" text-color="white">v1.0.1</v-chip>
    </v-row>
    <v-card class max-width="500px" outlined elevation="5">
      <v-subheader>Upload new firmware file</v-subheader>
      <div class="ml-3 mr-10 mb-1 font-weight-light">
        <v-file-input 
          ref="firmwareFile"
          v-on:change="handleFileUpload"
          label="Select firmware file"
          outlined
          dense
          accept=".bin"
          prepend-icon="mdi-chip"
          show-size
        ></v-file-input>
      </div>
      <v-btn class="ml-5 mb-5 white--text" left small color="green"
        v-on:click="uploadFirmwareFile">
        <v-icon left dark>mdi-cloud-upload</v-icon>
        Upload        
      </v-btn>
    </v-card>
    <v-divider class="mt-5 mb-5"></v-divider>

    <v-data-table
      :headers="headers"
      :items="firmwares"
      single-expand="true"
      :expanded.sync="expanded"
      item-key="fileName"
      show-expand
      class="elevation-5"
      items-per-page="5"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title class="font-weight-light">Firmwares on server</v-toolbar-title>
        </v-toolbar>
      </template>
      <template v-slot:item.versionValue="{ item }">
        <v-chip color="green" dark>{{ item.versionValue }}</v-chip>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          <div>
            <p class="font-weight-light">Info about {{ item.versionValue }}</p>

            <v-btn class="ml-5 mb-5 white--text" style="float:right" right small color="blue">
              <v-icon left dark>mdi-pencil-box</v-icon>
              Edit              
            </v-btn>
            <v-btn class="ml-5 mb-5 white--text" style="float:right" right small color="red">
              <v-icon left dark>mdi-delete</v-icon>
              Delete              
            </v-btn>
          </div>
        </td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import UploadFirmwareService from "@/services/UploadFirmwareService"

export default {
  data() {
    return {
      firmwareFile: '',
      expanded: [],
      headers: [
        {
          text: "Filename",
          align: "start",
          sortable: false,
          value: "fileName"
        },
        { text: "Version Number", value: "versionValue" },
        { text: "Date", value: "dateValue" },
        { text: "", value: "data-table-expand" }
      ],
      firmwares: [
        {
          fileName: "da121_firmware_v1.0.0.bin",
          versionValue: "v1.0.0",
          dateValue: "20/03/2020"
        },
        {
          fileName: "da121_firmware_v1.0.1.bin",
          versionValue: "v1.0.1",
          dateValue: "20/03/2020"
        },
        {
          fileName: "da121_firmware_v1.0.2.bin",
          versionValue: "v1.0.2",
          dateValue: "20/03/2020"
        },
        {
          fileName: "da121_firmware_v1.0.3.bin",
          versionValue: "v1.0.3",
          dateValue: "20/03/2020"
        },
        {
          fileName: "da121_firmware_v1.0.4.bin",
          versionValue: "v1.0.4",
          dateValue: "20/03/2020"
        }
      ]
    };
  },
  methods: {
    uploadFirmwareFile: function() {
      console.log("uploadFirmwareFile");
      let formData = new FormData();
      //formData.append('firmwareFile', this.photo, this.tagid + '.png')
      formData.append('firmwareFile', this.firmwareFile);

      UploadFirmwareService.uploadFirmware(formData).then(responseUpload => {
        console.log('response after firmware upload: ');      
        console.log(responseUpload);
      });  
      // axios.post('/firmware-upload', 
      // formData, {
      //   headers: {
      //     'Content-type': 'multipart/form-data'
      //   }
      // }).then(function() {
      //   console.log("sucess!");        
      // }).catch(function() {
      //   console.log("failed upload firmware");        
      // });

      // var person = {
      //   name: "Giovanni",
      //   lastname: "Bauermeister" 
      // }

      // HTTP.get('/gettest', 
      // person, {
      //   headers: {
      //     'Content-type': 'application/json'
      //   }
      // }).then(function() {
      //   console.log("sucess!");        
      // }).catch(function() {
      //   console.log("failed send name");        
      // });
      
    },
    handleFileUpload: function(file) {
      console.log("handleFileUpload");
      console.log(file);      
      this.firmwareFile = file;
      console.log(this.firmwareFile.name);      
    },
    makeGet: async function() {
      console.log("makeGet");    
      var data = {
        person: {
          name: "Giovanni",
          lastname: "Bauermeister"
        } 
      }
      const response = await UploadFirmwareService.makeGet(data);
      if(response.data.error === 'error') {
        console.log(response.data.errorMsg);
      }
    },
    // UploadFirmwareService.makeGet().then(employeeData => {
    //   employeeData.data.forEach(doc => {
    //     // console.log(doc.EmployeeName)
    //     const data = {
    //       'TagID': doc.TagID,
    //       'EmployeeName': doc.EmployeeName,
    //       'Title': doc.Title,
    //       'Department': doc.Department,
    //       'Cellphone': doc.Cellphone,
    //       'Email': doc.Email,
    //       'Address': doc.Address,
    //       'ImgLink': '/static/userphotos/' + doc.TagID + '.png'
    //     }
    //     // console.log(data.EmployeeName)
    //     // console.log(data.Title)
    //     this.employees.push(data)
    //     console.log(data.ImgLink)
        
                
    //   })
    //   // console.log(employeeData)
    //   // console.log(employeeData.data.length)
    //   // this.employees = employeeData.data
    //   // console.log(this.employees)
    // })
  },
  mounted() {

  }
};
</script>