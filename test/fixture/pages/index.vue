<template>
<div>
    {{ py_works }}
</div>
</template>

<script lang="py?compiler=pj">
class Component:
    def __init__(self):
        self['data'] = lambda: { 'py_works': 'Works!' }

__default__= Component()
</script>
