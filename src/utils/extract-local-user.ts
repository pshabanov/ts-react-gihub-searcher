import { GithubUser, LocalGithubUser } from '../types'

export const extractLocalUser = (user: GithubUser):LocalGithubUser => ({
	login: user.login,
	avatar: user.avatar_url,
	name: user.name,
	bio: user.bio,
	blog: user.blog,
	company: user.company,
	created: user.created_at,
	twitter: user.twitter_username,
	location: user.location,
	followers: user.followers,
	following: user.following,
	repos: user.public_repos,
	id: user.id
})
