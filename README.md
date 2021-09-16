# nomidea

<center>

![Colored NOM Idea Logo](./assets/nomidea_logo_colored.svg)
**Notion of Modules - Idea**

</center>

## TO DO

- [ ] Complete this Documnet of readme by:
  - [ ] explain the idea of project.
  - [ ] the workspace development.
- [ ] explain how use prisma commands and Database.
- [ ] Add FAQ for common problem/usages


## installation

> [!NOTE]
> We use **yarn** as package manager, and all in whole of this document, we describe only the yarn way to execute commands.


> [!NOTE]
> ...
>
> (many codes (TODO: finish docs/readme))

### development

for development run:
```bash
yarn dev
```


in your develompent mode you should to follow our ecosystem who we find it usefull.

1. add `app.test` local host to	your hosts file. read [How To add Hostname to LocalHost?](1)

this is imporatant for make a static redirect links from web hooks and services like `next-auth`. you can choose any local IP address.

by default we use `127.1.1.201` but you can change it to any other IP address available.

> [!IMPORTANT]
> if you get an error during use `yarn dev` command, try remove `-H app.test` from script command in `package.json` file.`to use your normal localhost IP. but this will not work with (per example: GitHub Auth) redirection and you need to create a specific Auth App to redirect to your localhost IP.




<!-- LINKS -->

[1]: https://phoenixnap.com/kb/how-to-edit-hosts-file-in-windows-mac-or-linux
