---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
{
    avatar: 'https://github.com/sagarvora.png',
    name: 'Sagar Vora',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/sagarvora' }
    ]
  },
  {
    avatar: 'https://github.com/vorasmit.png',
    name: 'Smit Vora',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/vorasmit' }    
    ]
  },
  {
    avatar: 'https://github.com/DaizyModi.png',
    name: 'Daizy Modi',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/DaizyModi' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of India Compliance is guided by a capable
      team, who are featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>