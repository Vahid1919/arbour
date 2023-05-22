import { NextResponse, NextRequest } from 'next/server';
export {default} from 'next-auth/middleware'

export function middleware(request){
    const sessionCookie = request.cookies.get('session');


  
    // Set a cookie
    response.cookies.set('new_cookie', 'my_new_cookie');
  
    if(request.nextUrl.pathname.startsWith("/plant/")){
        if(!sessionCookie){
            return NextResponse.redirect("/plant/")
        }
    }
  
    return response;
} 