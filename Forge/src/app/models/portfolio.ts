export interface Portfolio {
    userId?: number,
    email?: String,
    password?: String,
    firstName?: String,
    lastName?: String,
    portfolios?: [
        {
            id?: number,
            belongsTo?: String,
            status?: String,
            aboutMe?: {
                id?: number,
                description?: String,
                aboutMeItems?: [
                    {
                        id?: number,
                        content?: String
                    }
                ]
            },
            projects?: [],
            education?: [],
            skillMatrix?: [],
            industryEquivalency?: []
        }
    ],
    admin?: boolean
}