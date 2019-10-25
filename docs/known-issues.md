---
id: known-issues
title: Known Issues
sidebar_label: Known Issues
---
The following are known issues in version 0.3.2 of the <igia/> platform. 

For more information, discussion and questions regarding <igia/>, please visit our public discussion forum at the <a href="https://groups.google.com/forum/#!forum/igia"><igia/> Google Group</a>.

 <table>
   <thead>
     <tr>
       <th>Issue ID</td>
       <th>Description</td>
     </tr>
   </thead>
<tbody><tr><td style="white-space: nowrap;">HIPLATFORM-1278</td><td>First name and last name in smart launch app patient search should not be case sensitive.</td></tr><tr><td style="white-space: nowrap;">HIPLATFORM-1259</td><td>Automatic log off due to user inactivity not implemented in UI applications</td></tr><tr><td style="white-space: nowrap;">HIPLATFORM-1138</td><td>karate test plugin not logging request/response</td></tr><tr><td style="white-space: nowrap;">HIPLATFORM-931</td><td>Data integration pipeline creation & update APIs accepts more than required parameters.</td></tr><tr><td style="white-space: nowrap;">HIPLATFORM-900</td><td>Data Integration pipeline does not support GET API as destination. Only supports POST API as destination.  </td></tr><tr><td style="white-space: nowrap;">HIPLATFORM-866</td><td>When deploying new version of a pipeline, version number is incremented by 2, rather than 1.</td></tr><tr><td style="white-space: nowrap;">HIPLATFORM-864</td><td>Filter and transformer should explicitly indicate "nashorn-javascript", not just "javascript".</td></tr><tr><td style="white-space: nowrap;">HIPLATFORM-861</td><td>SFTP to FILE pipeline fails on large files.</td></tr><tr><td style="white-space: nowrap;">HIPLATFORM-825</td><td>POST /api/pipelines - data and description attribute of response transformer is allowed to map with numeric value.</td></tr><tr><td style="white-space: nowrap;">HIPLATFORM-794</td><td>Before creating the pipeline, the filter and transformers are not compiled, if provided, allowing malformed javascript without error.</td></tr><tr><td style="white-space: nowrap;">HIPLATFORM-723</td><td>Data integration pipeline import APIs error response is not standardized.</td></tr><tr><td style="white-space: nowrap;">HIPLATFORM-717</td><td>Data integration pipeline with HTTP as source doesn't support multipart/form-data.</td></tr><tr><td style="white-space: nowrap;">HIPLATFORM-622</td><td>In case of SFTP endpoint, data integration pipeline state change update is delayed.</td></tr><tr><td style="white-space: nowrap;">HIPLATFORM-781</td><td>In care management excel template, when goal has association and is not the last goal in the program then API fails to create the cmmn model. </td></tr><tr><td style="white-space: nowrap;">HIPLATFORM-791</td><td>Change in care management program excel worksheet name affects the API response field names.</td></tr><tr><td style="white-space: nowrap;">HIPLATFORM-1408</td><td>Data integration pipeline import APIs error response is not handled on UI.</td></tr>
<tr><td style="white-space: nowrap;">HIPLATFORM-1416</td><td>Field level validation is not implemented in Data Integration pipeline CRUD operations on UI.</td></tr>
<tr><td style="white-space: nowrap;">HIPLATFORM-1417</td><td>Field level validation is not implemented in Data Integration pipeline CRUD operations API.</td></tr>
<tr><td style="white-space: nowrap;">HIPLATFORM-1552</td><td>Automated execution of karate testcases through orchestration is not verified.</td></tr>
<tr><td style="white-space: nowrap;">HIPLATFORM-1427</td><td>While importing in concept import module all columns are mandatory concept csv file.</td></tr>
<tr><td style="white-space: nowrap;">HIPLATFORM-1428 </td><td>In concept import module parent concepts and their respective concept codes are mandatory.</td></tr>
<tr><td style="white-space: nowrap;">HIPLATFORM-1432</td><td>In Data import module addition of new observation fact for the existing patient is skipped</td></tr>
<tr><td style="white-space: nowrap;">HIPLATFORM-1573</td><td>Concept and data import module should display appropriate reason for error records in the file that sent back to the sftp server after import.</td></tr>
<tr><td style="white-space: nowrap;">HIPLATFORM-1574</td><td>In concept import module importing concept with concept_path = 699 or 700 characters is not handled. Currently it will throw the error.</td></tr>
<tr><td style="white-space: nowrap;">HIPLATFORM-1575</td><td>Concept import module doesn't display any error when an incorrect MetadataXml is provided in csv. Currently validation on metadataxml is not handled in the concept import module.</td></tr>
<tr><td style="white-space: nowrap;">HIPLATFORM-1581</td><td>Protractor test cases fails on Mac OS for integration-app component.</td></tr>
<tr><td style="white-space: nowrap;">HIPLATFORM-1572</td><td>Protractor test cases fails for Sample App component while running through orchestrator QA suite option.</td></tr>
<tr><td style="white-space: nowrap;">HIPLATFORM-1580</td><td>For i2b2-cdi-app setup on mac, Sftp server does not allow to upload files in the concept and data folder using external clients like FileZilla. It gives permission denied error.</br>
<b>Workaround:</b></br>
Perform following steps on mac</br>
  > docker ps </br>
* Get the container id for atmoz/sftp</br>
  > docker exec -it <b>container_id </b> bash</br>
* Once you are inside the container execute below commands:</br>
  > cd home/i2b2sftpuser/; chmod 777 concept data; exit</br> </td></tr>
</tbody>
</table>


