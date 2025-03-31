<template>
    <div class="flex gap-3">
        <SocialLink href="https://medium.com/@doobie-droid" label="Medium Link">
            <IconMedium />
        </SocialLink>

        <SocialLink href="mailto:lesliedouglas23@gmail.com" label="Contact By Mail">
            <IconEmail />
        </SocialLink>

        <SocialLink href="https://github.com/doobie-droid" label="Check out Github">
            <IconGithub />
        </SocialLink>

        <SocialLink href="https://gitlab.com/doobie-droid" label="GitLab">
            <IconGitlab />
        </SocialLink>

        <SocialLink href="https://linkedin.com/in/doobie-droid" label="LinkedIn">
            <IconLinkedin />
        </SocialLink>
    </div>
</template>

<script>
import SocialLink from './SocialLink.vue'
import IconEmail from './icons/IconEmail.vue';
import IconGithub from './icons/IconGithub.vue';
import IconGitlab from './icons/IconGitlab.vue';
import IconLinkedin from './icons/IconLinkedin.vue';
import IconMedium from './icons/IconMedium.vue';
export default {
    name: "SocialLink",
    components: {
        IconGithub,
        IconGitlab,
        IconLinkedin,
        IconEmail,
        IconMedium
    }
};
</script>