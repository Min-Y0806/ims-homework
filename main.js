var mysql= require('mysql');
var http=require("http");
var url=require("url");
var path = require('path');
var template=require("./lib/template")
var select=require("./lib/select")


var app=http.createServer((request,response)=>{
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'ekdskrnlqheo1',
        database : 'homework1'
      });
      connection.connect();
      var queryData=url.parse(request.url,true).query;
      var pathname=url.parse(request.url,true).pathname
       
      if(pathname==='/'){
        switch(queryData.id){
            case undefined:
               select.noquery(request,response)
                
            case 'subways':
                select.subways(request,response);
                
            case 'l1workers':
                select.l1workers(request,response);
            case 'l2workers':
                select.l2workers(request,response);
            case 'l3workers':
                select.l3workers(request,response);
                
        }
    }else if(pathname==="/create_subways"){
        connection.query(`SHOW TABLES FROM homework1`,(error,tables)=>{
            connection.query(`SELECT * FROM subways`,(error2,subways)=>{
                var i=0;
                var tag='<tr>';
                while(i<subways.length){
                          tag+=`<td>${subways[i].line}</td>
                          <td>${subways[i].carnumber}</td>
                          <td>${subways[i].time}</td>
                          <td>${subways[i].operating_time}</td>
                          <td>${subways[i].origin}</td>
                          <td>${subways[i].destination}</td>
                          <td><a href=''>Update</a></td>
                          <td><a href=''>Delete</a></td>
                          `
                          i++;
                          tag+='</tr>'
                      }
                var title=`Subways`;
                var list=template.list(tables)
                var body=` <table>
                <tr>
                    <th>line</th>
                    <th>carnumber</th>
                    <th>time</th>
                    <th>operating time</th>
                    <th>origin station</th>
                    <th>destination station</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                ${tag}
            </table>      
                <select name='sequence'  onchange="if(this.value) location.href=(this.value);">
                    <option label='time_sequence'>Time Sequence</option>
                    <option value='timebigger'>bigger</option>
                    <option value='timesmaller'>smaller</option>
                    <option label='operatingtime_sequence'>OperatingTime Sequence</option>
                    <option value="/operating_bigger">bigger</option>
                    <option value='operatingsmaller'>smaller</option>
                </select>
                
                
                <style>
                    table{
                        border-collapse:collapse;
                    }
                    th,td{
                        border:1px solid black;
                        text-align:center;
                        padding:5px;
                    }
                    a{
                        text-decoration:none;
                    }
                </style>

        `
                var control=`<h3>Create New</h3>
                <form action="/create_subways_process" method="post">
                  <p><input type="text" name="subway" placeholder="New subway"></p>
                  <p>
                    <textarea name="description" placeholder="description"></textarea>
                  </p>
                  ${template.authorselect(authors)}
                  <p>
                    <input type="submit">
                  </p>
                </form>
                `
                var html=template.HTML(title,list,body,control)
                response.writeHead(200);
                response.end(html)
            })

        })
        
    }
    else{
        response.writeHead(404);
        response.end("Not Found")
    }
        

              
              
            
          
      
      
    //   connection.query('SELECT * FROM subways',  (error, subways)=> {
    //     if (error) throw error;
    //     var i=0;
    //     var tag='<tr>';
    //     while(i<subways.length){
    //         tag+=`<td>${subways[i].line}</td>
    //         <td>${subways[i].carnumber}</td>
    //         <td>${subways[i].time}</td>
    //         <td>${subways[i].operating_time}</td>
    //         <td>${subways[i].origin}</td>
    //         <td>${subways[i].destination}</td>
    //         <td><a href=''>Update</a></td>
    //         <td><a href=''>Delete</a></td>
    //         `
    //         i++;
    //         tag+='</tr>'
    //     }
    //     var html=`
    //     <table>
    //         <tr>
    //             <th>line</th>
    //             <th>carnumber</th>
    //             <th>time</th>
    //             <th>operating time</th>
    //             <th>origin station</th>
    //             <th>destination station</th>
    //             <th>Update</th>
    //             <th>Delete</th>
    //         </tr>
    //         ${tag}
    //     </table>
    //     <a href='/create_process'>Create</a>
    //     <select name='sequence'  onchange="if(this.value) location.href=(this.value);">
    //         <option label='time_sequence'>Time Sequence</option>
    //         <option value='timebigger'>bigger</option>
    //         <option value='timesmaller'>smaller</option>
    //         <option label='operatingtime_sequence'>OperatingTime Sequence</option>
    //         <option value="/operating_bigger">bigger</option>
    //         <option value='operatingsmaller'>smaller</option>
    //     </select>
        
        
    //     <style>
    //         table{
    //             border-collapse:collapse;
    //         }
    //         th,td{
    //             border:1px solid black;
    //             text-align:center;
    //             padding:5px;
    //         }
    //         a{
    //             text-decoration:none;
    //         }
    //     </style>
    //     `
    //     response.writeHead(200);
    //     response.end(html)
        
    //   });
})

app.listen(3000)