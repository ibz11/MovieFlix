var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";


var builder = WebApplication.CreateBuilder(args);
//cors addition 

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                     builder =>
                     {
                         builder
                             .SetIsOriginAllowed(origin => true)
                             .AllowAnyHeader()
                             .AllowAnyMethod();
                     });
});

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

//Use CORS middleware
app.UseCors(MyAllowSpecificOrigins);


//Data
var myMovies = new List<Movies>
{
    

    new Movies{
         id=1,
        title= "Han Solo: A Starwars Story",
        image= "https://orangemagazine.ph/wp-content/uploads/2018/05/Solo-HanSolo-702x1024.jpg",
         year= "2018",
         link= "https://www.youtube.com/embed/jPEYpryMp2s?si=ZKVygDAvawxlf8hO"
    },
  new Movies{
        id= 2,
        title= "Stranger things",
        image= "https://m.media-amazon.com/images/I/91miBpFYN5L.jpg",
        year="2018",
        link="https://www.youtube.com/embed/sBEvEcpnG7k?si=30WsaBodGeeL0iok"
    }
    ,
    new Movies{
        id= 3,
        title= "Rebel Moon Part One:Child of Fire",
        image= "https://m.media-amazon.com/images/M/MV5BYzlhNzBmYjUtNjRmZC00MDg3LWE4NDMtZDNjODUwNTljMzhlXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
        year= "2023",
        link= "https://www.youtube.com/embed/_rHLOXbFZtI?si=_95MK_h7kPQl2Sff"
    }

};


//Routes

app.MapGet("/", () =>
{
    return "hello world";
});


app.MapGet("/api", () =>
{
    return myMovies;
});

app.MapGet("/api/{id}", (int id) =>
{
    var movie = myMovies.Find(m => m.id == id);
    if (movie == null)
    {
        return Results.NotFound("sorry this movie doesn't exist");
    }
       
    
    return Results.Ok(movie);
});



app.MapPost("/api", (Movies movie) =>
{

    myMovies.Add(movie);
    return myMovies;
});


app.MapPut("/api/{id}", (int id,Movies updatedMovie) =>
{
    var movie = myMovies.Find(m => m.id == id);
    if (movie == null)
    {
        return Results.NotFound("sorry this movie doesn't exist");
    }
    movie.title = updatedMovie.title;
    movie.image = updatedMovie.image;
    movie.year = updatedMovie.year;
    movie.link = updatedMovie.link;
    return Results.Ok(myMovies);
});


app.MapDelete("/api/{id}", (int id) =>
{
    var movie = myMovies.Find(m => m.id == id);
    if (movie == null)
    {
        return Results.NotFound("sorry this movie doesn't exist");
    }
    myMovies.Remove(movie);
    return Results.Ok(myMovies);

});




app.Run();

class Movies
{
    public int id { get; set; }
    public required string title { get; set; }

    public required string image { get; set; }
    public required string year { get; set; }
    public required string link { get; set; }

}

