use actix_web::{web, App, HttpResponse, HttpServer, Responder};

// Handler function for the root route
async fn hello() -> impl Responder {
    HttpResponse::Ok().body("Hello from Actix-Web!")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    println!("🚀 Server running at http://127.0.0.1:8080/");

    HttpServer::new(|| {
        App::new()
            .route("/", web::get().to(hello))  // Define a GET route
    })
    .bind(("127.0.0.1", 8080))?  // Bind to localhost:8080
    .run()
    .await
}
