var template=require("./template")

var url=require("url");
var mysql= require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'ekdskrnlqheo1',
    database : 'homework1'
  });
  connection.connect();

exports.noquery=function(request,response){
    connection.query(`SHOW TABLES FROM homework1`,(error,tables)=>{
        if(error)throw error;
     connection.query('SELECT * FROM subways',  (error2, subways)=> {
         if (error2) throw error2;
   
        var title="City Subway Administration System"
        var list= template.list(tables); 
        var html=template.HTML(title,list,'','');
        response.writeHead(200);
        response.end(html)
        })
    })
}

exports.subways=function(request,response){
    var queryData=url.parse(request.url,true).query;
    var pathname=url.parse(request.url,true).pathname
    if(queryData.id='subways'){
        connection.query(`SHOW TABLES FROM homework1`,(error,tables)=>{
            connection.query(`SELECT * FROM subways`,(error2,subways)=>{
                if(error2)throw error2;
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
                var list=template.list(tables);

                var body=`
                <table>
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
                var control=`<a href='/create_subways'>Create</a>`
              var html=template.HTML(title,list,body,control)
              response.writeHead(200);
              response.end(html)
            })
        })
    }
}


exports.l1workers=function(request,response){
    connection.query(`SHOW TABLES FROM homework1`,(error,tables)=>{
        connection.query(`SELECT * FROM l1workers`,(error2,workers)=>{
            var i=0;
            var tag='<tr>'
            while(i<workers.length){
                tag+=`<td>${workers[i].id}</td>
                <td>${workers[i].name}</td>
                <td>${workers[i].birthday}</td>
                <td>${workers[i].gender}</td>
                <td>${workers[i].car}</td>
                `
                tag+="</tr>"
                i++;
            }
            var title="line1-workers";
            var list=template.list(tables);
            var body=`
            <table>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>birthday</th>
                    <th>gender</th>
                    <th>car</th>
                </tr>
                ${tag}

            </table>
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
            var html=template.HTML(title,list,body,'')
            response.writeHead(200);
            response.end(html)
        })
    })
  
}
exports.l2workers=function(request,response){
    connection.query(`SHOW TABLES FROM homework1`,(error,tables)=>{
        connection.query(`SELECT * FROM l2workers`,(error2,workers)=>{
            var i=0;
            var tag='<tr>'
            while(i<workers.length){
                tag+=`<td>${workers[i].id}</td>
                <td>${workers[i].name}</td>
                <td>${workers[i].birthday}</td>
                <td>${workers[i].gender}</td>
                <td>${workers[i].car}</td>
                <td><a href=''>Update</a></td>
                <td><a href=''>Delete</a></td>
                `
                tag+="</tr>"
                i++;
            }
            var title="line2-workers";
            var list=template.list(tables);
            var body=`
            <table>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>birthday</th>
                    <th>gender</th>
                    <th>car</th>
                    <th class="ctrl">Update</th>
                    <th class="ctrl">Delete</th>
                </tr>
                ${tag}

            </table>
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
                .ctrl{
                    color:blue
                }
                
            </style>
            
            `
            var html=template.HTML(title,list,body,'')
            response.writeHead(200);
            response.end(html)
        })
    })
  
}
exports.l3workers=function(request,response){
    connection.query(`SHOW TABLES FROM homework1`,(error,tables)=>{
        connection.query(`SELECT * FROM l3workers`,(error2,workers)=>{
            var i=0;
            var tag='<tr>'
            while(i<workers.length){
                tag+=`<td>${workers[i].id}</td>
                <td>${workers[i].name}</td>
                <td>${workers[i].birthday}</td>
                <td>${workers[i].gender}</td>
                <td>${workers[i].car}</td>
                `
                tag+="</tr>"
                i++;
            }
            var title="line3-workers";
            var list=template.list(tables);
            var body=`
            <table>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>birthday</th>
                    <th>gender</th>
                    <th>car</th>
                </tr>
                ${tag}

            </table>
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
            var html=template.HTML(title,list,body,'')
            response.writeHead(200);
            response.end(html)
        })
    })
  
}