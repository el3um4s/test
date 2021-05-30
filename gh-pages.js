import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/el3um4s/test.git', // Update to point to your repository  
        user: {
            name: 'Samuele de Tomasi', // update to use your name
            email: 'el3um4s@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)