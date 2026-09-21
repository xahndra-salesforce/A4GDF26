const state = {
    filter: 'all',
    query: '',
    lastModalTrigger: null
};

const finalistVideos = {
    'The AI Owes You': 'DnCGxrazS8A7Go7FhB8y86',
    'Design for Everyone: The Inclusion Readiness Agent': 'ckEitvPeLadoVTePnzmLuT',
    'AccessForce, Forms for All!': 'jTTzYhoBXEGUPBkNPgFind',
    'Curb Cut ✿ Ask for what you need, without saying why': 'rjjyERY2z6HA5KioD1z51i',
    'CampusCare': 'PzKEmQPi2YJxu83xrh11xX',
    'SonderGen': 'qTSJDErHuA58yaQDFbHGdT'
};

const supplementalVideos = {
    "JP's project": {
        label: 'Empowering Rural Women in Uganda video',
        url: 'https://drive.google.com/file/d/1GEJ5_IoZ32JLXw3oiuZ70px2krpX2ICU/view?usp=share_link'
    },
    "Katie's project": {
        label: 'Agentforce Flex overview video',
        url: 'https://studio.capsule.video/6a9f2c44a9f100716d32904d'
    },
    'Mission Force: Architect for Good': {
        label: 'Mission Force video',
        url: 'https://drive.google.com/drive/folders/1r_m_rbzSIPbA6W9Y7PmFP8x3dqt0n4uT?usp=sharing'
    },
    'Ohm': {
        label: 'Ohm video',
        url: 'https://studio.capsule.video/6a9f3a40a9f100716d352c99'
    },
    'Robot Integrated with Agentforce & Slack via Headless360': {
        label: 'Robotic Astro video',
        url: 'https://drive.google.com/file/d/1UbiHEZxaqz6rzLAeXwASLMNMEvos18Wt/view?usp=drive_link'
    },
    'Skill Match AI: for on-demand skills-based volunteering': {
        label: 'Skill Match AI video',
        url: 'https://drive.google.com/file/d/1jCaqYdcVkUZHADx4RVRYdfrgDtXwup6-/view?usp=sharing'
    },
    "Sri's project": {
        label: 'AccessAlly video',
        url: 'https://drive.google.com/file/d/1HHOhApi8MfbLHbksZkRx_cSDoqXW2hc1/view?usp=sharing'
    }
};

const primaryArtifacts = {
    'AccessForce - An Agentforce Companion for Salesforce Work': {
        label: 'View concept brief',
        url: 'https://drive.google.com/file/d/12s54v46io4rkxya6S4jEWYBDJV7ggl4U/view?usp=sharing'
    },
    'accessLocal': {
        label: 'View presentation',
        url: 'https://tinyurl.com/4e62ujyn'
    },
    'EyeMay': {
        label: 'View presentation',
        url: 'https://docs.google.com/presentation/d/1qdipKXUqG7wmFKcvZIerI7FuzuXjNfYcfN6dEuTKSco/edit?usp=sharing'
    },
    'HUMAN ™ - Helping Unite Meaningful Assistance Networks': {
        label: 'View concept brief',
        url: 'https://drive.google.com/file/d/1AdEp9f1-Ps99GzRXXY5rH__IU3Q7ivEf/view?usp=sharing'
    },
    "Irfan's project": {
        label: 'View presentation',
        url: 'https://drive.google.com/file/d/14GrABfw3TpfRr5wv4sf8U9LyTkii6M7Q/view?usp=drivesdk'
    },
    "Karolina 's project": {
        label: 'View presentation',
        url: 'https://docs.google.com/presentation/d/13XxCrPP7sgGzivWjo3mfFJKicmN26qm0UtoiU79od5g/edit?usp=sharing'
    },
    'Keys to Home: AI-Powered Access to Affordable Housing': {
        label: 'View concept brief',
        url: 'https://docs.google.com/document/d/1dcnCSWkFCBYxbLAKbqU_-7H8cboNxBFdFGU8CTr1WYA/edit?tab=t.0'
    },
    'ProjectX': {
        label: 'View presentation',
        url: 'https://docs.google.com/presentation/d/1SBayc34MfKjkhz98vuAVfmmgzcadjCv8/edit?usp=sharing&ouid=101144279782269967448&rtpof=true&sd=true'
    },
    'Rides to the Ballot': {
        label: 'View submission',
        url: 'https://docs.google.com/document/d/1jjMXM2J0oVRoEBlpicM4BNQWxuTQY-vlmIFp2fv4VTY/edit?usp=sharing'
    },
    'Rights You Can Understand': {
        label: 'View presentation',
        url: 'https://docs.google.com/presentation/d/1Or1rCBDMqn_I7uM6rg7DPeo9hg150Mb6/edit?usp=sharing&ouid=108188603630151293722&rtpof=true&sd=true'
    },
    'The Last-Mile Voice': {
        label: 'View concept brief',
        url: 'https://drive.google.com/file/d/1JgKPjZ8-sKJ071-phhJOzYarNJwhSTsy/view?usp=drivesdk'
    }
};

function escapeHtml(value = '') {
    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}

function safeUrl(value) {
    if (!value) return null;

    try {
        const url = new URL(value, window.location.href);
        return ['http:', 'https:'].includes(url.protocol) ? url.href : null;
    } catch {
        return null;
    }
}

function publicText(value = '') {
    return String(value)
        .replace(/\bPassword\s*:\s*\S+/gi, '[credential removed]')
        .replace(/\bUsername\s*:\s*\S+/gi, '[credential removed]')
        .replace(/\bOrgId\s*:\s*\S+/gi, '[org detail removed]');
}

function awardClass(award) {
    return /1st Place|2nd Place|3rd Place|🥇|🥈|🥉/.test(award) ? 'award-badge place' : 'award-badge';
}

function finalistVideoFor(project) {
    const videoId = finalistVideos[project.title];
    if (!videoId) return null;

    return {
        url: `https://salesforce.vidyard.com/watch/${videoId}`,
        thumbnail: `https://play.vidyard.com/${videoId}.jpg?small=1&play_button=0&`,
        label: `${project.title} finalist video`
    };
}

function youtubeVideoId(value) {
    const url = safeUrl(value);
    if (!url) return null;

    const parsed = new URL(url);
    if (parsed.hostname === 'youtu.be') return parsed.pathname.split('/').filter(Boolean)[0] || null;
    if (parsed.hostname.endsWith('youtube.com')) return parsed.searchParams.get('v');
    return null;
}

function videoThumbnailFor(value) {
    const youtubeId = youtubeVideoId(value);
    if (youtubeId) return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;

    const driveFileId = value?.match(/drive\.google\.com\/file\/d\/([^/]+)/)?.[1];
    if (driveFileId) return `https://drive.google.com/thumbnail?id=${driveFileId}&sz=w1000`;

    return null;
}

function isRealVideo(item) {
    const label = (item?.label || '').trim();
    const url = safeUrl(item?.url);
    if (!url || /\b(no video|n\/?a)\b/i.test(label)) return false;

    const hostname = new URL(url).hostname.toLocaleLowerCase();
    return [
        'youtube.com',
        'youtu.be',
        'vidyard.com',
        'loom.com',
        'screencast.com',
        'drive.google.com',
        'sharepoint.com',
        'capsule.video'
    ].some(host => hostname === host || hostname.endsWith(`.${host}`));
}

function primaryVideoFor(project) {
    const finalistVideo = finalistVideoFor(project);
    if (finalistVideo) return finalistVideo;

    const supplementalVideo = supplementalVideos[project.title];
    if (supplementalVideo) {
        return {
            ...supplementalVideo,
            thumbnail: videoThumbnailFor(supplementalVideo.url)
        };
    }

    const video = (project.videos || []).find(isRealVideo);
    if (!video) return null;

    return {
        url: safeUrl(video.url),
        thumbnail: videoThumbnailFor(video.url),
        label: video.label || `${project.title} video`
    };
}

function primaryArtifactFor(project) {
    return primaryArtifacts[project.title] || null;
}

function isMeaningfulResource(item) {
    const url = safeUrl(item.url);
    if (!url) return false;

    const placeholderHosts = ['example.com', 'na.com', 'www.na.com', 'google.com', 'www.google.com'];
    const placeholderLabel = /^(n\/?a|link)?$/i.test((item.label || '').trim());
    return !placeholderHosts.includes(new URL(url).hostname.toLocaleLowerCase()) && !placeholderLabel;
}

function createAwardBadges(awards = []) {
    if (!awards.length) return '';

    const badges = awards
        .map(award => `<li><span class="${awardClass(award)}">${escapeHtml(award)}</span></li>`)
        .join('');

    return `<ul class="awards-badges" aria-label="Awards">${badges}</ul>`;
}

function createThumbnail(project) {
    const primaryVideo = primaryVideoFor(project);
    const thumbnail = safeUrl(project.thumbnail) || primaryVideo?.thumbnail;
    const shapes = `
        <span class="thumbnail-shape thumbnail-shape--one"></span>
        <span class="thumbnail-shape thumbnail-shape--two"></span>
    `;

    if (primaryVideo) {
        return `
            <a class="project-thumbnail${thumbnail ? ' project-thumbnail--image' : ''} video-thumbnail-link"
                href="${escapeHtml(primaryVideo.url)}" target="_blank" rel="noopener noreferrer"
                aria-label="Watch video for ${escapeHtml(project.title)} (opens in a new tab)">
                ${thumbnail ? `<img src="${escapeHtml(thumbnail)}" alt="" class="project-image" loading="lazy" referrerpolicy="no-referrer">` : shapes}
                <span class="video-play-mark" aria-hidden="true">▶</span>
            </a>
        `;
    }

    if (thumbnail) {
        return `<div class="project-thumbnail project-thumbnail--image" aria-hidden="true"><img src="${escapeHtml(thumbnail)}" alt="" class="project-image" loading="lazy" referrerpolicy="no-referrer"></div>`;
    }

    return `
        <div class="project-thumbnail" aria-hidden="true">
            ${shapes}
        </div>
    `;
}

function createProjectCard(project, index) {
    const isWinner = project.category === 'winner';
    const primaryVideo = primaryVideoFor(project);
    const primaryArtifact = primaryArtifactFor(project);

    return `
        <article class="project-card${isWinner ? ' winner' : ''}"
            data-index="${index}"
            data-track="${escapeHtml(project.track)}"
            data-category="${escapeHtml(project.category)}">
            ${createThumbnail(project)}
            <div class="project-content">
                ${createAwardBadges(project.awards)}
                <p class="project-track">${escapeHtml(project.track)}</p>
                <h3 class="project-title">${escapeHtml(project.title)}</h3>
                <p class="project-team"><strong>Team:</strong> ${escapeHtml(project.team || 'Not specified')}</p>
                <p class="project-pitch">${escapeHtml(publicText(project.pitch || project.description || 'Project details coming soon.'))}</p>
                <div class="card-actions">
                    ${primaryVideo ? `<a class="button" href="${escapeHtml(primaryVideo.url)}" target="_blank" rel="noopener noreferrer">Watch video<span class="sr-only"> for ${escapeHtml(project.title)} (opens in a new tab)</span></a>` : ''}
                    ${primaryArtifact ? `<a class="button" href="${escapeHtml(primaryArtifact.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(primaryArtifact.label)}<span class="sr-only"> for ${escapeHtml(project.title)} (opens in a new tab)</span></a>` : ''}
                    <button class="button details-button" type="button" data-project-index="${index}">
                        View details
                    </button>
                </div>
            </div>
        </article>
    `;
}

function destinationFor(project) {
    const trackPrefix = project.track === 'Builder Track' ? 'builder' : 'ai';
    const categorySuffix = project.category === 'winner' ? 'winners' : 'participants';
    return document.getElementById(`${trackPrefix}-${categorySuffix}`);
}

function renderProjects() {
    projectsData.projects.forEach((project, index) => {
        const destination = destinationFor(project);
        if (destination) destination.insertAdjacentHTML('beforeend', createProjectCard(project, index));
    });
}

function matchesFilter(project) {
    if (state.filter === 'builder' && project.track !== 'Builder Track') return false;
    if (state.filter === 'ai-fluency' && project.track !== 'AI Fluency Track') return false;
    if (state.filter === 'winners' && project.category !== 'winner') return false;

    if (!state.query) return true;

    const searchableText = [
        project.title,
        project.full_title,
        project.team,
        project.track,
        publicText(project.pitch),
        publicText(project.description),
        ...(project.awards || [])
    ].join(' ').toLocaleLowerCase();

    return searchableText.includes(state.query);
}

function updateResults() {
    let visibleTotal = 0;
    const visibleByTrack = {
        'Builder Track': 0,
        'AI Fluency Track': 0
    };

    document.querySelectorAll('.project-card').forEach(card => {
        const project = projectsData.projects[Number(card.dataset.index)];
        const visible = matchesFilter(project);
        card.classList.toggle('hidden', !visible);

        if (visible) {
            visibleTotal += 1;
            visibleByTrack[project.track] += 1;
        }
    });

    document.querySelectorAll('.project-group').forEach(group => {
        const hasVisibleCards = group.querySelector('.project-card:not(.hidden)');
        group.classList.toggle('hidden', !hasVisibleCards);
    });

    document.querySelectorAll('.track-section').forEach(section => {
        const hasVisibleCards = section.querySelector('.project-card:not(.hidden)');
        section.classList.toggle('hidden', !hasVisibleCards);
    });

    document.getElementById('builder-count').textContent = `(${visibleByTrack['Builder Track']} projects)`;
    document.getElementById('ai-count').textContent = `(${visibleByTrack['AI Fluency Track']} projects)`;
    document.getElementById('empty-state').classList.toggle('hidden', visibleTotal !== 0);

    const projectWord = visibleTotal === 1 ? 'project' : 'projects';
    document.getElementById('filter-status').textContent = `Showing ${visibleTotal} ${projectWord}`;
}

function setupFiltering() {
    const buttons = document.querySelectorAll('.nav-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            state.filter = button.dataset.filter;
            buttons.forEach(item => {
                const active = item === button;
                item.classList.toggle('active', active);
                item.setAttribute('aria-pressed', String(active));
            });
            updateResults();
        });
    });

    document.getElementById('project-search').addEventListener('input', event => {
        state.query = event.target.value.trim().toLocaleLowerCase();
        updateResults();
    });
}

function createResourceList(project) {
    const primaryVideo = primaryVideoFor(project);
    const primaryArtifact = primaryArtifactFor(project);
    const resources = [
        ...(primaryVideo ? [{ label: primaryVideo.label, url: primaryVideo.url, type: 'Video' }] : []),
        ...(primaryArtifact ? [{ label: primaryArtifact.label, url: primaryArtifact.url, type: 'Artifact' }] : []),
        ...(project.videos || []).map(item => ({ ...item, type: 'Video' })),
        ...(project.docs || []).map(item => ({ ...item, type: 'Resource' }))
    ].filter(isMeaningfulResource);

    const uniqueResources = resources.filter((item, index, all) =>
        all.findIndex(candidate => safeUrl(candidate.url) === safeUrl(item.url)) === index
    );

    if (!uniqueResources.length) return '';

    const items = uniqueResources.map(item => {
        const label = item.label && !/^n\/?a$/i.test(item.label.trim()) ? item.label : item.type;
        return `<li><a href="${escapeHtml(safeUrl(item.url))}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}<span class="sr-only"> (opens in a new tab)</span></a></li>`;
    }).join('');

    return `<section class="modal-section"><h3>Project resources</h3><ul class="resource-list">${items}</ul></section>`;
}

function openProjectModal(index, trigger) {
    const project = projectsData.projects[index];
    if (!project) return;

    const modal = document.getElementById('project-modal');
    const primaryVideo = primaryVideoFor(project);
    const primaryArtifact = primaryArtifactFor(project);
    state.lastModalTrigger = trigger;

    document.getElementById('modal-content').innerHTML = `
        <p class="modal-kicker">${escapeHtml(project.track)}${project.category === 'winner' ? ' · Award winner' : ''}</p>
        <h2 id="modal-title">${escapeHtml(project.full_title || project.title)}</h2>
        <p class="project-team"><strong>Team:</strong> ${escapeHtml(project.team || 'Not specified')}</p>
        ${createAwardBadges(project.awards)}
        ${primaryVideo ? `<p class="modal-section"><a class="button" href="${escapeHtml(primaryVideo.url)}" target="_blank" rel="noopener noreferrer">Watch video<span class="sr-only"> for ${escapeHtml(project.title)} (opens in a new tab)</span></a></p>` : ''}
        ${primaryArtifact ? `<p class="modal-section"><a class="button" href="${escapeHtml(primaryArtifact.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(primaryArtifact.label)}<span class="sr-only"> for ${escapeHtml(project.title)} (opens in a new tab)</span></a></p>` : ''}
        <section class="modal-section">
            <h3>About the project</h3>
            <p class="modal-description">${escapeHtml(publicText(project.description || project.pitch || 'Project details coming soon.'))}</p>
        </section>
        ${createResourceList(project)}
    `;

    modal.showModal();
    document.getElementById('modal-close').focus();
}

function setupModal() {
    const modal = document.getElementById('project-modal');

    document.addEventListener('click', event => {
        const trigger = event.target.closest('.details-button');
        if (trigger) openProjectModal(Number(trigger.dataset.projectIndex), trigger);
    });

    document.getElementById('modal-close').addEventListener('click', () => modal.close());

    modal.addEventListener('click', event => {
        if (event.target === modal) modal.close();
    });

    modal.addEventListener('cancel', event => {
        event.preventDefault();
        modal.close();
    });

    modal.addEventListener('close', () => {
        state.lastModalTrigger?.focus();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    setupFiltering();
    setupModal();
    updateResults();
});
