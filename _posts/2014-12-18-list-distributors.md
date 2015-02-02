---
layout: page
title: "List Distributors"
category: doc
date: 2014-12-18 16:47:48
order: 3
---
This method returns a list of Distributors (for example schools and retirement homes) for a specific Data Provider. In order to call this method the Data Providers Base URL need to retreived using the [List Data Providers](/doc/list-data-providers.html) method.

<table>
	<tr>
		<td>URL: </td>
		<td>[Data Provider Base URL]/openmeal/v2/distributors.json</td>
	</tr>
	<tr>
		<td>HTTP Method: </td>
		<td>GET</td>
	</tr>
	<tr>
		<td>Parameters: </td>
		<td><ul><li>addressCountry - optional parameter used to only get the Distributors for a specific country. Use the 2-letter [ISO 3166-1 aplha-2](http://en.wikipedia.org/wiki/ISO_3166-1) country code, for example "SE" for Sweden</li></ul></td>
	</tr>
	<tr>
		<td>Formats: </td>
		<td>JSON</td>
	</tr>
</table>

##Response
The method returns a list of Distributors, including name, contact information and the Data Provider ID. Distributors are described with a data model inspired by the [schema.org Organization](http://schema.org/Organization). 

|Property|Type|Description|Required?|
|-----------|------|--------------|-------------|
|name|String|The name of the organisation|Yes|
|lang|String|The 2-letter [ISO 639 alpha-2](http://en.wikipedia.org/wiki/ISO_639-1) language code describing the language used in all Strings of this object. For example *sv* for Swedish.|Yes|
|description|String|A brief description of the organisation|No|
|address|Object|The address of the organisation|Yes|
|address > streetAddress|String|The street address|No|
|address > postalCode|String|The postal code|No|
|address > addressLocality|String|The locality, for example the City|No|
|address > addressRegion|String|The region, for example the State|No|
|address > addressCountry|String|The 2-letter [ISO 3166-1 aplha-2](http://en.wikipedia.org/wiki/ISO_3166-1) country code, for example *SE* for Sweden|Yes|
|url|String|The URL to the organisations web site|No|
|email|String|A contact email address for the organisation|No|
|phone|String|A contact phone number for the organisation|No|
|distirbutorID|String|Identifiying the Distributor within the Data Providers systems, not a unique ID across several Data Providers. Used to get data for a specific Distributor|Yes|
|iCalendar|String|The URL to an iCalendar feed with the meal information. [Read more](/doc/icalendar.html) information about the optional iCalendar feature.|No|
|language|

##Example

    GET http://openmeal.foodindustries.inc/openmeal/v2/distributors.json?addressCountry=SE
    
    {
	    "status" : 200,
	    "data" : [
	    	{
				"name" : "The Local School",	
				"lang" : "en",	
				"address" : {
					"streetAddress" : "Main Street 42",
					"postalCode" : "555 55",
					"addressLocality" : "Stockholm",			
					"addressCountry" : "SE"
				},
				"url" : "http://thelocalschool.se",
				"telephone" : "+46 555 555 555",
				"distributorID" : "123456789"
			},
			...
	    ]	 	   
    }