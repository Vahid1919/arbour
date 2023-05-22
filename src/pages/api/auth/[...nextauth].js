import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"


export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "email", placeholder: "vahid@test.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        // const res = await fetch("/your/endpoint", {
        //   method: 'POST',
        //   body: JSON.stringify(credentials),
        //   headers: { "Content-Type": "application/json" }
        // })
        // const user = await res.json()

        // // If no error and we have user data, return it
        if (credentials.email === "vahid@test.com" && credentials.password === "test") {
          return {
            id: 101,
            first_name: "Vahid",
            last_name: "Nesro",
            email: "vahid@test.com"
          }
        }

        // Return null if user data could not be retrieved

      }
    })
  ],
  callbacks: {
    // makes sure user object is available when the callback is run the first time
    jwt: (
      { token, user }) => {
      if (user) {
        token.id = user.id;
      }

      return token
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id
      }

      return session
    },
    // async signIn({ email, password }) {
    //     const isAllowedToSignIn = true
    //     if (isAllowedToSignIn) {
    //       return true
    //     } else {
    //       // Return false to display a default error message
    //       return false
    //       // Or you can return a URL to redirect to:
    //       // return '/unauthorized'
    //     }
    //   }
  },
  secret: "test",
  jwt: {
    secret: "test",
    encryption: true
  },
  pages: {
    signIn: "/auth/login",
    error: "/profile"
  }
})

