# _Fly, You Fools!_
The aim of this Lord of the Rings themed QuickStart guide is to provide a comprehensive navigation tool for the main starter kit found in the TELUS GitHub repository, and provide a straightforward path to setting up core applications needed to create a simple API that’s integrated with the TELUS specifications. Prior to following this guide, ensure that you have set-up your computer with the basic TELUS suite of applications needed. Confirm your initial Mac setup [here](https://github.com/telus/OSXlaptop_provisioning). 

Begin by following the steps as outlined below. If further clarity is required, click on each step for more details regarding it. The guide is broken into 2 portions: Initial device setup and API construction.

As well, a top-level note that will help throughout this process is that if your Terminal is misbehaving, closing and restarting it can help. This guide is strives to catch all the possible errors that can be encountered and propose solutions to get around them, but if for some reason you encounter an issue beyond what is covered, restarting your Terminal session is often helpful. And while we're on the topic of Terminal, using the in-built Mac Terminal is fine, but if for some reason you want to use a third party Terminal, you can explore [iTerm2](https://www.iterm2.com/). 

**Device setup**

0.	[Setup Homebrew (Note: highly recommended)](#step-0)
1.	[Corporate Proxy Detection and Authorizing and Adding SSH Keys](#step-1)
2.	[Install Node and NPM](#step-2)
3.	[Install Yarn](#step-3)
4.	[Install Vault CLI](#step-4)
5.	[Install OpenShift CLI](#step-5)
6.	[Install Docker](#step-6)
7.	[Install Shippy](#step-7)
 
**API construction**

8.	[Clone TELUS API starter kit GitHub repository](#step-8)
9.	[Run Authorization Proxy Locally](#step-9)
10.	[Put together an API](#step-10)
11.	[Deploying the API](#step-11)



# *Device setup*
### Step 0
For MacOS, the installation of such applications is significantly eased through the use of Homebrew. It is highly recommended that unless you are comfortable with installing software independently, to setup Homebrew. The rest of this guide’s installation guide will function under the assumption of Homebrew usage. The steps are outlined below:

  *	Open Terminal
  *	Ensure you are disconnected from TELUS VPN
  *	[Installation instructions for Homebrew are here if you want to follow source instructions](https://docs.brew.sh/Installation)
   * An important note about the following installation process: We will run a script that is fetched via ```curl```. While it shouldn't be an issue during this Homebrew installation, it's wise to understand the possible security risks associated with it. ```curl``` is a command that transfers data from a server via some protocal such as HTTP or HTTPS, and runs it directly on your system as root. This can be dangerous because although HTTPS has some security checks in place, it isn't hard for a malicious middle man to inject arbitrary code into your pipe installer, and since you're running as root, if you don't notice extra packages being installed, serious harm can be done once they have access to your system. It's good to just keep these things in the back of your head. Nevertheless, proceed with the following installation process.
  *	Paste the following into Terminal (one line): 
```/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"```
  *	If you are met with the following error, check again that your VPN is disconnected:
```
curl: (7) Failed to connect to raw.githubusercontent.com port 443: Operation timed out
```
  *	If all goes well, you should see the following output:
```
==> This script will install:
/usr/local/bin/brew
/usr/local/share/doc/homebrew
/usr/local/share/man/man1/brew.1
/usr/local/share/zsh/site-functions/_brew
/usr/local/etc/bash_completion.d/brew
/usr/local/Homebrew
==> The following existing directories will be made group writable:
/usr/local/include
/usr/local/lib
/usr/local/share
/usr/local/share/doc
/usr/local/share/man
/usr/local/share/man/man1
==> The following existing directories will have their owner set to t933962:
/usr/local/include
/usr/local/lib
/usr/local/share
/usr/local/share/doc
/usr/local/share/man
/usr/local/share/man/man1
==> The following existing directories will have their group set to admin:
/usr/local/include
/usr/local/lib
/usr/local/share
/usr/local/share/doc
/usr/local/share/man
/usr/local/share/man/man1
==> The following new directories will be created:
/usr/local/Cellar
/usr/local/Homebrew
/usr/local/Frameworks
/usr/local/etc
/usr/local/opt
/usr/local/sbin
/usr/local/share/zsh
/usr/local/share/zsh/site-functions
/usr/local/var
Press RETURN to continue or any other key to abort
  ```
  *	Proceed to press RETURN and enter your computer password when prompted 
  *	Check for any potential upgrades:
```brew update && brew upgrade```
  *	This concludes the Homebrew setup; the other package can now be easily installed.

### Step 1 
Throughout this process, you will come across some steps that require being connected to TELUS VPN, and other steps where you have to disconenct from VPN in order to progress. Whenever these occasions arise, this guide will explicitly point them out. However, we can set up a corporate proxy detection in order to get around this issue. [See source instructions here](https://github.com/telus/corporate-proxy-detection). If this setup doesn't work, simply follow the guide and its flags on when to turn on and off your VPN. However, this setup is a good chance to learn to generate an SSH key, link it with your GitHub account, and get your key authorized by TELUS. With that in mind, proceed with the steps below:

  * In order to add an SSH key to your profile, **turn off your VPN** and open Terminal
  * Type the following: ```ssh-keygen -t rsa -b 4096 -C "pranav.agnihotri@telus.com"``` ensuring that the email at the end **your** GitHub account email
  * You will see the following output:
     ```
    Generating public/private rsa key pair.
    Enter file in which to save the key (/Users/t933962/.ssh/id_rsa): 
    ```
  * Do not type anything, and proceed to hit ENTER. You will be met with the following: 
    ```
    Enter passphrase (empty for no passphrase): 
    ```
  * Enter your GitHub password (recommended). You will be asked to re-enter your password. Do so, and you will be met with the following:
      ```
      Your identification has been saved in /Users/t933962/.ssh/id_rsa.
    Your public key has been saved in /Users/t933962/.ssh/id_rsa.pub.
    The key fingerprint is:
    SHA256:aguzebfGe9YuJ7wqzXcqoBNdGCa4sDpkWVpziZMULvw pranav.agnihotri@telus.com
    The key's randomart image is:
    +---[RSA 4096]----+
    |  .++ .          |
    |o oB.oo          |
    | ==o+o o         |
    |.=+   . .        |
    |+  E . .S        |
    |o   . o.         |
    | .  ooo= . .     |
    |    o*o.B B +    |
    |    oo.++OoO.    |
    +----[SHA256]-----+
    ```
  * Now, type : ```eval "$(ssh-agent -s)"```
  * You'll see the following output (your pid will be a different number but that's to be expected):
      ```
      Agent pid 15076
      ```
  * Now type: ```ssh-add ~/.ssh/id_rsa``` 
  * You'll be asked to enter your password from above, so enter that and the output you see should be like the following:
      ```
      Identity added: /Users/t933962/.ssh/id_rsa (/Users/t933962/.ssh/id_rsa)
      ```
  * Now, go to https://github.com, click on your profile picture in the top right corner, click **settings** and in the list on the left, click on **SSH and GPG keys**. Click on **New SSH Keys**. Proceed to give your key a Title so you can recognize it.
  * In order to paste your SSH key into the box labelled **Key**, you need to copy it to your clipboard. So go back into Terminal and type the following: ```pbcopy < ~/.ssh/id_rsa.pub```
  * Now go back to GitHub and paste your SSH key into the **Key** box via ```command + v```. Click on **Add SSH Key** to finish off the process. 
  * Having added your SSH key, you need to now get it authorized by TELUS. So, on the right of your newly added SSH key, right next to the **Delete** button, there's a **SSO** button. Click on that to be taken to the authentication system by TELUS. Just follow through on that website. Login to your TELUS account when asked. They will send you an authentication code to your TELUS email (to acces this you're going to have to **turn your VPN back on**). Once everything is authenticated, go back to Terminal and **turn your VPN off again**.
  * Now type: ```brew install corkscrew ```
  * Once the installation has completed, type: 
  ```git clone git@github.com:telusdigital/corporate-proxy-detection.git```
 You can now **turn on VPN again**
  * Now run the following command:
  ```cat ~/corporate-proxy-detection/ssh_config >> ~/.ssh/config ```
  * Finally, run: ```ssh application.workspace-development.teluswebteam.com -p 10443```
 
*Note: If this process doesn't work, it's fine to simply follow through the guide and just disconnect and reconnect your VPN when needed. This exercise is mostly useful for the authenticated SSH key setup.*



### Step 2 
Type the following into Terminal once you have setup Homebrew:	
```brew install node```
Confirm the installation has been done correctly by checking version:
```node -v && npm -v```
If you get a version output, you're good to go. At the time of writing of this document, the node and npm versions are as below. 
```
v10.5.0
6.1.0
```

### Step 3 
Type the following into Terminal:
```brew install yarn```

### Step 4 
Type the following into Terminal:
```brew install vault```

### Step 5 
Type the following into Terminal:
```brew install openshift-cli```

### Step 6 
Installing Docker is a slightly lengthier process, but remember you get paid by the hour, so count this as a blessing and follow the steps below:
  * Go to the Docker website at https://store.docker.com/editions/community/docker-ce-desktop-mac
  * You will have to create an account and log-in in order to download Docker
  * Hit the download Docker button, and wait for it to be fully downloaded.
  * Once it has been downloaded, double-click Docker.dmg to open the installer, then drag  Moby the whale to the Applications folder.
  * Then, double-click Docker.app in the Applications folder to start Docker.
  * Authorize Docker.app with your system password after you launch it
  * The whale icon in the top status bar indicates that Docker is running and accessible from a terminal.
  * You can now confirm you have everything installed correctly by typing into Terminal:
```docker info```
  * If your output looks similar to the following, you’re good to go:
```
L600033:homebrew t933962$ docker info
Containers: 0
 Running: 0
 Paused: 0
 Stopped: 0
Images: 0
Server Version: 18.06.0-ce
Storage Driver: overlay2
 Backing Filesystem: extfs
 Supports d_type: true
 Native Overlay Diff: true
Logging Driver: json-file
Cgroup Driver: cgroupfs
Plugins:
 Volume: local
 Network: bridge host ipvlan macvlan null overlay
 Log: awslogs fluentd gcplogs gelf journald json-file logentries splunk syslog
Swarm: inactive
Runtimes: runc
Default Runtime: runc
Init Binary: docker-init
containerd version: d64c661f1d51c48782c9cec8fda7604785f93587
runc version: 69663f0bd4b60df09991c08812a60108003fa340
init version: fec3683
Security Options:
 seccomp
  Profile: default
Kernel Version: 4.9.93-linuxkit-aufs
Operating System: Docker for Mac
OSType: linux
Architecture: x86_64
CPUs: 4
Total Memory: 1.952GiB
Name: linuxkit-025000000001
ID: LFKC:QW6D:EZTW:HVXA:LVBZ:3CZW:2RKG:GNTN:5DQI:5HI5:XIKZ:G77U
Docker Root Dir: /var/lib/docker
Debug Mode (client): false
Debug Mode (server): true
 File Descriptors: 24
 Goroutines: 50
 System Time: 2018-07-29T02:03:28.134434553Z
 EventsListeners: 2
HTTP Proxy: gateway.docker.internal:3128
HTTPS Proxy: gateway.docker.internal:3129
Registry: https://index.docker.io/v1/
Labels:
Experimental: true
Insecure Registries:
 127.0.0.0/8
Live Restore Enabled: false
```


### Step 7

[Shippy](https://github.com/telus/shippy-cli) is the indefatigable TELUS digital delivery platform assistant. This is the first tool specific to TELUS digital you'll be installing.

To install shippy, ensure that your VPN is disconnected and then type the following into Terminal:
```$ npm install -g @telusdigital/shippy-cli```
If you are met with the following error, ensure you're disconnected from VPN:
```
L600033:homebrew t933962$ npm install -g @telusdigital/shippy-cli
npm ERR! code ETIMEDOUT
npm ERR! errno ETIMEDOUT
npm ERR! network request to https://registry.npmjs.org/@telusdigital%2fshippy-cli failed, reason: connect ETIMEDOUT 104.16.24.35:443
npm ERR! network This is a problem related to network connectivity.
npm ERR! network In most cases you are behind a proxy or have bad network settings.
npm ERR! network 
npm ERR! network If you are behind a proxy, please make sure that the
npm ERR! network 'proxy' config is set properly.  See: 'npm help config'

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/t933962/.npm/_logs/2018-07-29T02_35_42_699Z-debug.log
```
Or, you might face the following error: 
```
L600033:homebrew t933962$ npm install -g @telusdigital/shippy-cli
npm WARN checkPermissions Missing write access to /usr/local/lib/node_modules
npm ERR! path /usr/local/lib/node_modules
npm ERR! code EACCES
npm ERR! errno -13
npm ERR! syscall access
npm ERR! Error: EACCES: permission denied, access '/usr/local/lib/node_modules'
npm ERR!  { [Error: EACCES: permission denied, access '/usr/local/lib/node_modules']
npm ERR!   stack:
npm ERR!    'Error: EACCES: permission denied, access \'/usr/local/lib/node_modules\'',
npm ERR!   errno: -13,
npm ERR!   code: 'EACCES',
npm ERR!   syscall: 'access',
npm ERR!   path: '/usr/local/lib/node_modules' }
npm ERR! 
npm ERR! The operation was rejected by your operating system.
npm ERR! It is likely you do not have the permissions to access this file as the current user
npm ERR! 
npm ERR! If you believe this might be a permissions issue, please double-check the
npm ERR! permissions of the file and its containing directories, or try running
npm ERR! the command again as root/Administrator (though this is not recommended).

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/t933962/.npm/_logs/2018-07-29T03_52_35_322Z-debug.log
```

Now, this can be fixed by running ```sudo```. But, as a general rule of thumb, it serves well to stay away from the  ```sudo``` command when installing things. So, instead, what you can do is realize that the reason the error is being thrown is because /usr/local is not writable by your user. You can take the following steps to fix this:
  * Since we have homebrew setup, we can issue the command: ```brew doctor```
  * Now retry: ```npm install -g @telusdigital/shippy-cli ```
  * If it still does not work, issue the following command:
```sudo chown -R $(whoami):admin /usr/local/lib```
  * Now retry: ```npm install -g @telusdigital/shippy-cli ```
  * If this still does not work, resort to: ```$ sudo npm install -g @telusdigital/shippy-cli```
Enter your system password when prompted, and the installation should take place. 

At the end, to confirm installation, issue the command:
```$ shippy help```
If you’re met with a list of instructional Shippy commands, you’re good to go.

# *API Construction*
### Step 8 
To clone the starter-kit repository, type the following into Terminal:
```git clone git@github.com:telus/api-starter-kit.git```
If this works, proceed with the following:
```cd api-starter-kit```
```./init.sh```
However, chances are that after attempting to clone the repository you will encounter an error such as:
```
L600033:homebrew t933962$ git clone git@github.com:telus/api-starter-kit.git
Cloning into 'api-starter-kit'...
The authenticity of host 'github.com (192.30.253.112)' can't be established.
RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'github.com,192.30.253.112' (RSA) to the list of known hosts.
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```
OR an error such as:
```
L600033:homebrew t933962$ git clone git@github.com:telus/api-starter-kit.git
Cloning into 'api-starter-kit'...
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.
```
In this case, do the following ([GitHub source instructions](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)):
 
  * Go to your GitHub account. 
  * In the upper-right corner of any page, click your profile photo, then click Settings.
  * In the left sidebar, click **Developer settings**.
  * In the left sidebar, click **Personal access tokens**.
  * Click **Generate new token**.
  * Give your token a descriptive name.
  * Select the scopes, or permissions, you'd like to grant this token. To use your token to access repositories from the command line (which is what you want to do), select **repo**.
  * Click **Generate token**.
  * Click to copy the token to your clipboard. For security reasons, after you navigate off the page, you will not be able to see the token again. So, paste this token in a notepad somewhere for safekeeping for the moment.


Now, go back to Terminal, and type into Terminal the following:
```git clone https://github.com/telus/api-starter-kit.git```
When prompted for username, enter your GitHub username. When prompted for password, paste in your token and hit enter.
You will then see something such as the following:
```
L600033:~ t933962$ git clone https://github.com/telus/api-starter-kit.git
Cloning into 'api-starter-kit'...
Username for 'https://github.com': PranavAgnihotri
Password for 'https://PranavAgnihotri@github.com': 
remote: The `telus' organization has enabled or enforced SAML SSO. To access
remote: this repository, visit https://github.com/orgs/telus/sso?authorization_request=AnqyAifdBKkb401qSR1sHGeGPtg1fJX0ks5bXgKBgq1jcmVkZW50aWFsX2lkzgxaAMyvY3JlZGVudGlhbF90eXBlq09hdXRoQWNjZXNz
remote: and try your request again.
fatal: unable to access 'https://github.com/telus/api-starter-kit.git/': The requested URL returned error: 403
```
Copy the link, and once there, follow the instructions to get your token credentials validated by TELUS. It will involve entering your password, and perhaps entering a verification code that will be sent to you either via email or text.
Once your credentials have been validated, go back to Terminal, and do the exact same process again. Type in the same command, and when prompted, enter your GitHub username and the same token as the password. 
What you see next should be similar to the following:
```
L600033:~ t933962$ git clone https://github.com/telus/api-starter-kit.git
Cloning into 'api-starter-kit'...
Username for 'https://github.com': PranavAgnihotri
Password for 'https://PranavAgnihotri@github.com': 
remote: Counting objects: 2088, done.
remote: Compressing objects: 100% (52/52), done.
remote: Total 2088 (delta 63), reused 50 (delta 37), pack-reused 1999
Receiving objects: 100% (2088/2088), 828.32 KiB | 3.00 MiB/s, done.
Resolving deltas: 100% (1302/1302), done.
L600033:~ t933962$ cd api-starter-kit
L600033:api-starter-kit t933962$ ./init.sh
? Administrative (sudo) priviledges are required to add local.
telus.com to your /etc/hosts. Authenticate now Y/n? Yes
The local.telus.com hosts entry has been added

Shippy is initialized!
Shippy needs to create a GitHub token
? GitHub User Name: PranavAgnihotri
? GitHub Password: [hidden]
? One-Time Passcode (2-Factor): [hidden]
yarn install v1.9.2
[1/5] 🔍  Validating package.json...
[2/5] 🔍  Resolving packages...
[3/5] 🚚  Fetching packages...
[----------------------------------------------------] 0/1041(node:12914) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
info There appears to be trouble with your network connection. Retrying...
[4/5] 🔗  Linking dependencies...
warning " > express-winston@2.5.1" has unmet peer dependency "winston@>=1.x".
[5/5] 📃  Building fresh packages...
✨  Done in 56.58s.
```
Shippy will require you to enter your GitHub username and GitHub password (not your Token this time) as well as an authentication code that will be sent out through text. Once this has been done, you have successfully cloned the repository and are ready to move on.


### Step 9 

Authorization Proxy (AuthProxy) is a TELUS digital tool for managing API security. Before trying to create an API, we need to first run AuthProxy locally to stub our security infrastructure.

First you need to gain access to TELUS Shippy. Contact a team member in order to gain access, and be sure to have ready your:
*  TELUS ID
* GitHub username
* TELUS email 

Once you have been added to Shippy, follow these steps (**Note, VPN must be turned off to run authproxy locally**):

To confirm that you're in Shippy, type the following into Terminal
```Shippy status```
The output you want to be looking for is:
```
policies:
  - api-platform-write
  - default
```
Now that you're in Shippy, the steps hereon outwards are slightly complicated so follow through carefully.
  * First clone the authorization-proxy repository via:
 ```git clone git@github.com:telusdigital/authorization-proxy.git ``` if this doesn't work you will likely get the following error:

```
Cloning into 'authorization-proxy'...
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.
Please make sure you have the correct access rights
and the repository exists.
```
  * If you get that error, try: 
```git clone https://github.com/telus/authorization-proxy.git```
You should get a success message that looks like:
```
Cloning into 'authorization-proxy'...
remote: Counting objects: 8041, done.
remote: Compressing objects: 100% (106/106), done.
remote: Total 8041 (delta 75), reused 118 (delta 62), pack-reused 7868
Receiving objects: 100% (8041/8041), 5.17 MiB | 3.70 MiB/s, done.
Resolving deltas: 100% (5132/5132), done.
L600033:api-starter-kit t933962$ cd authorization-proxy
L600033:authorization-proxy t933962$ ./init-npm.sh
Shippy is initialized!
yarn install v1.9.2
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[-----------------------------------------------------] 0/895(node:13620) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
[3/4] 🔗  Linking dependencies...
[4/4] 📃  Building fresh packages...
✨  Done in 30.11s.
```
  * Now type:  ```cd authorization-proxy```
  * Next:  ```./init-npm.sh```
You should see the following message: 
```
Shippy is initialized!
```
  * Proceed to type:  ```shippy project o-api-platform```
The Terminal won't execute anything, and will simply proceed to the next command line. This is how you know it worked
  * Now type: ``` ./scripts/decrypt-with-shippy.js```
You should see success in the form of:
```
# Decrypting secrets from vault
# Writing secrets to files
# Copying JWT keys from mock-jwt-keys

# Secrets are located here: /Users/t933962/api-starter-kit/authorization-proxy/secrets
```
  * Next, type: ```npm run redis:start```
  * When the above has finished executing, run: ```npm run dev```

Contragulations, you have Authorization Proxy up and running, and can move on.

### Step 10 

For this step, you will need **to open a new tab in Terminal**, so that you can continue the rest of the process to build your API, while leaving Authorization Proxy running locally.

  * Begin by typing in the new window:
```cd api-starter-kit``` 
  * Next, type:  ```yarn development```
  * You will see a bunch of output in the `Terminal`, but when it pauses momentarily, open the following link (best to use Safari):
http://local.telus.com:4000/

The link should open up to a page with the heading **Development Index Page**. Underneath, there should be several subheadings, the first of which being **Authorization Proxy**. The status should read **Not Authenticated**. In order to resolve this issue, hit the **Login** link in the section directly underneath titled **Authentication**. This will redirect you to a TELUS login page. Use a Test account to login. Ask your team members for the information, or use the following (**ensuring VPN is turned off before logging in**):
*Username*: ``` daveyapples@telusinternal.com```
*Password*: ```Passw0rd```

Once this has been processed, you should be redirected back to the **Development Index Page** except now you should see the words **Authenticated** in green text. As well, you should now be able to see all the information of the account you logged in with under the **OAuth2 Protected API Example** section, as follows:
```
{
  "serviceAssociationResponse": {
    "serviceAssociation": {
      "persistentId": "3DEA86AB178C4E7F834BAD81481D30D9",
      "firstName": "Dave",
      "lastName": "Testing",
      "userName": null,
      "emailTxt": "daveyapples@telusinternal.com",
      "notificationLanguageCd": "en",
      "lastLoginDate": "2018-08-01 16:37:46",
      "wirelessOwnerBanList": [
        {
          "ban": "19528429",
          "permissionId": "13824934"
        }
      ],
      "cpBillingAccountIdList": [],
      "canManagerList": [],
      "ffhOwnerCustomerList": [],
      "ffhOwnerBanList": [],
      "wirelessManagerBanList": [],
      "wirelessMemberPhoneNumberList": [
        {
          "phone": "4169060208",
          "permissionId": "32731750"
        },
        {
          "phone": "4168890200",
          "permissionId": "32731794"
        },
        {
          "phone": "9054245117",
          "permissionId": "32731795"
        },
        {
          "phone": "5064800044",
          "permissionId": "32731797"
        }
      ]
    },
    "status": {
      "statusCd": "200",
      "statusTxt": "OK",
      "systemErrorTimeStamp": "2018-08-01T16:38:14-04:00",
      "systemErrorTxt": null
    }
  }
}
```
This is a sign of success. 

  * Now, **open up another tab in Terminal**, and ensure that you're in the api-starter-kit directory. If you're not, navigate there via: 
  ```cd api-starter-kit```
  * Type: ```docker-compose build```
  This can take some time, but again remember that (hopefully) double digit salary you're raking in per hour just for watching your terminal load. Things could be worse. At least you're not the one having to write this guide.
  * Anyways, once the above command has executed, follow with: ```docker-compose up api```
  * If you get the following error, go to your tab running ```yarn development``` and use ctrl+c to kill the program, since it's using the port needed to run the Docker command. Then retry 
  ```docker-compose up api```: 
      ```
    L600033:api-starter-kit t933962$ docker-compose up api
    Starting api-starter-kit ... error
    ERROR: for api-starter-kit  Cannot start service api: driver failed programming external connectivity on endpoint api-starter-kit (4ad3c642b75cdf12753e4708c2d8863292f77169ced088fe1018420101ba59b1): Error starting userland proxy: Bind for 0.0.0.0:4000 failed: port is already allocated
    ERROR: for api  Cannot start service api: driver failed programming external connectivity on endpoint api-starter-kit (4ad3c642b75cdf12753e4708c2d8863292f77169ced088fe1018420101ba59b1): Error starting userland proxy: Bind for 0.0.0.0:4000 failed: port is already allocated
    ERROR: Encountered errors while bringing up the project.
    ```
  * Once the command works, proceed to the next step.
 


### Step 11 

In order to deploy this API, **open yet another Terminal tab**. If you want to test the API, you can run the following commands:
```docker-compose run api test ```
```docker-compose run load```

However, to deploy the application to OpenShift, go about the following steps:
  * ```shippy login```
  * ```shippy environment main```
  * ```shippy project o-api-platform```
  * ```shippy create pipeline api-starter-kit```
  You should see the following: 
  ```
Your GitHub repository build pipeline will be deployed shortly. It may take a up to a minute for the pipeline to be installed into the OpenShift project. Once it is ready, you can set up a webhook to automatically build your commits it with 'shippy create webhook api-starter-kit'.
  ```
  * ```shippy create webhook api-starter-kit```

To see your starter kit deploy, login to OpenShift via your TELUS g-suite credentials at the following link: https://console.telusdigital.openshift.com/console/project/o-api-platform/overview

  * Go to the **Overview** section 
  * In the search bar, filter by *api-starter-kit*
  * Hit the drop down arrow to see more 
  * In the bottom right, you'll see something like:
  Routes - External Traffic
https://api-starter-kit-staging-o-api-platform.c1b9.telusdigital.openshiftapps.com
  * That link is what you can use to view your API in deployment. Load it up on an external device and see if you can get to the same **Development Index Page** from last time, login, and so on. If you can, congratulations! You have successfully completed your quest to create a basic API with TELUS specifications and tools! Feel free to hop on a boat with some elves and sail off to a mysterious land, never to return.

At least until 9 A.M tomorrow.
 










