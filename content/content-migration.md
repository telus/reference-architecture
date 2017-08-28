# CMS as Code

## Why

The way that software development teams interact with CMS systems today is undergoing a change. The old paradigms of using a CMS to build an app have serious challenges - as a general rule, they aren't compatible with modern techniques like Continuous Delivery - changes made to the content and content model must generally be made manually.

Applications which embed a custom CMS implementation can sidestep these problems; they can have direct control of the DB, so they can just use what a Rails developer might call ["migration scripts"](http://guides.rubyonrails.org/active_record_migrations.html) <sup>[1](#dbdeploy)</sup> in order to script changes to the underlying schema that dictates the content model, and even the content itself. They can write database scripts which safely change whatever content is in the prod db, and test these scripts in dev, test, staging, even pre-publish environments. This gives them quite a bit of safety around the process. 

Headless CMS systems like Contentful promise to be somewhere in between - a bit of a toolkit that we can use to build the CMS that we might want. Today, Contentful offers us many capabilities; to extend their UI, a powerful API that can do most of what the UI does, and the flexibility to model content as we like. We can even use the API to alter the content model today - though we cannot also change the content. This leaves us in a state where we don't quite have the benefits that our friends who embed their own CMS have. We can't apply the ["database evolution"](https://martinfowler.com/articles/evodb.html) concept to safely, programmatically alter content model and content itself.

So why do we care?

We're incredibly close to having a CMS system that's vendor supported, that we don't have to own the maintenance or operation of, that properly supports modern Continuous Delivery practices around safe code changes.

Let's finish the job.

## What

## How

## References

<a name="#dbdeploy">1</a> Systems like [DBDeploy](http://dbdeploy.com/) make this capability available generically to several languages and database systems, SQL and NoSQL alike.
 
https://martinfowler.com/articles/evodb.html

More on application which embed their own custom CMS implementation: https://martinfowler.com/articles/two-stack-cms/

https://www.contentful.com/r/knowledgebase/cms-as-code/