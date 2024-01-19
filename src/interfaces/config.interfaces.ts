interface Configuration {
    [key:string]: ENV
}

interface ENV {
    app: APP
    db: DB
    auth0: AUTH0
    cloudinary: CLOUDINARY
}

interface APP {
    PORT: number | string
}

interface DB {
    uri: string
}

interface AUTH0 {
    client_origin: string | undefined,
    audience: string | undefined,
    issuer: string | undefined
}

interface CLOUDINARY {
    cloud_name: string | undefined,
    api_key: string | undefined,
    api_secret: string | undefined
}

export default Configuration