/* ========================================
   AI Numerology Insights - JavaScript Logic
   ======================================== */

// ========== NUMBER MEANINGS DATABASE ==========
// Comprehensive database of numerological meanings for numbers 1-9, 11, 22, 33
const numberMeanings = {
    1: {
        name: 'The Leader',
        traits: 'Independent, ambitious, pioneering, strong-willed, innovative',
        career: 'Entrepreneur, executive, innovator, pioneer',
        description: 'You are a natural born leader with exceptional determination and independence. Number 1 represents beginnings, new ventures, and the drive to initiate. You possess the courage to forge your own path and inspire others to follow. Your strength lies in your ability to take charge and bring visionary ideas to reality. Embrace your leadership qualities and channel your ambition toward meaningful goals.',
        positive: 'Leadership, ambition, creativity, independence, courage',
        challenge: 'Arrogance, impatience, stubbornness, isolation'
    },
    2: {
        name: 'The Peacemaker',
        traits: 'Diplomatic, sensitive, intuitive, cooperative, harmonious',
        career: 'Counselor, artist, mediator, therapist, team player',
        description: 'You are a natural harmonizer with exceptional emotional intelligence. Number 2 represents balance, partnership, and sensitivity. You excel at understanding the needs of others and creating peaceful environments. Your intuition guides you toward making wise decisions that benefit everyone. You thrive in collaborative settings and are a loyal friend. Your gift is bringing people together and fostering understanding.',
        positive: 'Diplomacy, intuition, cooperation, sensitivity, adaptability',
        challenge: 'Indecisiveness, passivity, over-sensitivity, self-doubt'
    },
    3: {
        name: 'The Creator',
        traits: 'Expressive, creative, enthusiastic, optimistic, communicative',
        career: 'Artist, writer, performer, designer, entertainer',
        description: 'You are a creative force bursting with expression and enthusiasm. Number 3 represents creativity, communication, and joy. You have a natural talent for artistic pursuits and connecting with audiences. Your optimistic outlook inspires those around you to embrace life\'s possibilities. You communicate with clarity and charm, making complex ideas accessible. Your mission is to share your creative gifts with the world and bring beauty into others\' lives.',
        positive: 'Creativity, communication, optimism, expressiveness, joy',
        challenge: 'Superficiality, scattered energy, over-talkativeness, lack of focus'
    },
    4: {
        name: 'The Builder',
        traits: 'Practical, stable, loyal, hardworking, disciplined',
        career: 'Engineer, contractor, accountant, administrator, craftsman',
        description: 'You are the foundation builder of the numerological wheel. Number 4 represents stability, structure, and solid foundations. You possess the practical wisdom and discipline to create lasting structures. You are reliable, loyal, and methodical in your approach to challenges. Your strength lies in creating systems and foundations that stand the test of time. You bring order to chaos and build the infrastructure upon which others can thrive.',
        positive: 'Stability, reliability, practicality, loyalty, discipline',
        challenge: 'Rigidity, limitation, stubbornness, resistance to change'
    },
    5: {
        name: 'The Adventurer',
        traits: 'Adventurous, curious, versatile, dynamic, freedom-loving',
        career: 'Travel guide, journalist, salesperson, pilot, entrepreneur',
        description: 'You are a dynamic explorer with an insatiable curiosity about life. Number 5 represents freedom, change, and adventure. You thrive on variety and new experiences, constantly seeking new horizons. Your versatility allows you to adapt to any situation with grace. You are a natural communicator and networker, making connections wherever you go. Your life is a journey of discovery, and you inspire others to embrace change and explore possibilities.',
        positive: 'Versatility, curiosity, adaptability, dynamic energy, courage',
        challenge: 'Impulsiveness, restlessness, irresponsibility, inconsistency'
    },
    6: {
        name: 'The Nurturer',
        traits: 'Caring, responsible, harmonious, family-oriented, compassionate',
        career: 'Nurse, teacher, counselor, social worker, healer',
        description: 'You are a caring presence with a strong sense of responsibility and compassion. Number 6 represents nurturing, balance, and unconditional love. You are naturally drawn to helping others and creating loving, supportive environments. Your strength lies in your ability to heal emotional wounds and provide comfort to those in need. You excel in caregiving roles and bring harmony to families and communities. Your mission is to love deeply and serve others with genuine compassion.',
        positive: 'Compassion, responsibility, nurturing, balance, healing',
        challenge: 'Over-responsibility, self-sacrifice, meddling, judgment'
    },
    7: {
        name: 'The Seeker',
        traits: 'Analytical, spiritual, introspective, mysterious, philosophical',
        career: 'Researcher, scientist, philosopher, investigator, spiritual teacher',
        description: 'You are a truth-seeker with a profound connection to deeper mysteries. Number 7 represents spirituality, analysis, and inner wisdom. You possess a natural inclination toward research and investigation, always seeking to understand the hidden truths. Your introspective nature allows you to gain insights that others overlook. You are drawn to spiritual pursuits and philosophical questions about existence. Your journey is one of spiritual enlightenment and intellectual discovery.',
        positive: 'Wisdom, spirituality, analysis, introspection, insight',
        challenge: 'Escapism, isolation, skepticism, overthinking'
    },
    8: {
        name: 'The Power Player',
        traits: 'Ambitious, authoritative, material-focused, commanding, executive',
        career: 'CEO, judge, business owner, financial advisor, leader',
        description: 'You are a powerful force with exceptional ability to manifest material success. Number 8 represents abundance, power, and material achievement. You possess natural leadership qualities and executive abilities. Your ambition drives you to reach the highest levels of success and influence. You understand the dynamics of power and can navigate complex situations with authority. Your strength lies in creating wealth and building empires. You have the potential to achieve great success and make a significant impact in the world.',
        positive: 'Ambition, power, material success, leadership, abundance',
        challenge: 'Materialism, greed, ruthlessness, workaholism'
    },
    9: {
        name: 'The Humanitarian',
        traits: 'Compassionate, idealistic, wise, universal, selfless',
        career: 'Philanthropist, activist, counselor, healer, spiritual guide',
        description: 'You are a humanitarian with a universal perspective and deep compassion. Number 9 represents completion, wisdom, and universal love. You possess a natural concern for humanity and a desire to make the world a better place. Your wisdom comes from diverse life experiences and a deep understanding of human nature. You are drawn to causes greater than yourself and find fulfillment in serving others. Your mission is to help humanity evolve and bring compassion to the world.',
        positive: 'Compassion, wisdom, universality, idealism, selflessness',
        challenge: 'Emotional drain, lack of boundaries, idealism, detachment'
    },
    11: {
        name: 'The Illuminator',
        subtitle: '(Master Number)',
        traits: 'Intuitive, visionary, inspiring, idealistic, enlightened',
        career: 'Spiritual teacher, mentor, visionary leader, innovator',
        description: 'Master Number 11 is exceptionally rare and carries immense spiritual significance. You possess heightened intuition and spiritual awareness that sets you apart. You are a natural illuminator with the ability to inspire others toward higher consciousness. You bridge the gap between the material and spiritual worlds. Your mission is to awaken others to their potential and guide them toward enlightenment. You carry a spiritual responsibility to use your gifts for the greater good.',
        positive: 'Intuition, spiritual insight, inspiration, visionary thinking, healing',
        challenge: 'Anxiety, nervousness, self-doubt, over-sensitivity to others\' energy'
    },
    22: {
        name: 'The Architect',
        subtitle: '(Master Number)',
        traits: 'Visionary, practical, ambitious, master builder, grounded',
        career: 'Architect, engineer, master planner, large-scale innovator',
        description: 'Master Number 22 is the "Master Builder" - rarely encountered and extraordinarily powerful. You have the rare ability to manifest grand visions into concrete reality. You combine visionary thinking with practical implementation skills. You are destined to undertake large-scale projects that benefit humanity. Your strength lies in your ability to organize vast resources and coordinate complex endeavors. You have the potential to leave a lasting legacy and change the world through your monumental creations.',
        positive: 'Vision, practicality, large-scale thinking, master planning, legacy',
        challenge: 'Perfectionism, over-ambition, grandiosity, burnout'
    },
    33: {
        name: 'The Teacher',
        subtitle: '(Master Number)',
        traits: 'Compassionate, teacher, healer, universal, selfless',
        career: 'Spiritual teacher, healer, counselor, guide, humanitarian leader',
        description: 'Master Number 33 is the rarest and most spiritually significant - the "Master Teacher." You carry exceptional healing and teaching abilities. You are guided by profound compassion and a desire to uplift humanity. Your presence has transformative power, and you naturally inspire spiritual growth in others. You are called to serve as a guide and mentor, sharing your wisdom freely. Your mission is to help others evolve spiritually and emotionally, bringing healing and love to the world.',
        positive: 'Compassion, teaching, healing, spiritual guidance, unconditional love',
        challenge: 'Emotional overwhelm, codependency, self-neglect, martyr complex'
    }
};

// ========== PYTHAGOREAN NUMEROLOGY SYSTEM ==========
// A=1, B=2, C=3, ... Z=26 (reduced to 1-9)
const pythagoreanSystem = {
    'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
    'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
    'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
};

// ========== UTILITY FUNCTIONS ==========

/**
 * Reduces a number to a single digit by summing its digits recursively
 * Special case: Master numbers 11, 22, 33 are NOT reduced
 * @param {number} num - The number to reduce
 * @returns {number} - The reduced single digit or master number
 */
function reduceNumber(num) {
    // Handle numbers less than 10
    if (num < 10) return num;
    
    // Handle master numbers - do not reduce further
    if (num === 11 || num === 22 || num === 33) return num;
    
    // For other numbers, keep reducing until single digit
    while (num >= 10) {
        num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
        // Check again for master numbers during reduction
        if (num === 11 || num === 22 || num === 33) return num;
    }
    
    return num;
}

/**
 * Formats a date string from YYYY-MM-DD to more readable format
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @returns {string} - Formatted date
 */
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

/**
 * Generates HTML content for displaying number meaning
 * @param {number} number - The number to get meaning for
 * @returns {string} - HTML string of the meaning
 */
function generateMeaningHTML(number) {
    const meaning = numberMeanings[number];
    if (!meaning) return '<p>Number not found</p>';

    return `
        <h4>${meaning.name} ${meaning.subtitle || ''}</h4>
        <p><strong>Traits:</strong> ${meaning.traits}</p>
        <p><strong>Career Fields:</strong> ${meaning.career}</p>
        <p><strong style="color: #00d4ff;">Core Meaning:</strong> ${meaning.description}</p>
        <p><strong style="color: #d4af37;">Strengths:</strong> ${meaning.positive}</p>
        <p><strong style="color: #ff6b6b;">Challenges:</strong> ${meaning.challenge}</p>
    `;
}

// ========== LIFE PATH NUMBER CALCULATOR ==========

/**
 * Calculates Life Path Number from birth date
 * Life Path = Day + Month + Year (all reduced to single digit or master number)
 * @param {string} dateString - Birth date in YYYY-MM-DD format
 * @returns {number} - The calculated Life Path Number
 */
function calculateLifePath(dateString) {
    const date = new Date(dateString);
    
    // Extract day, month, and year
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are 0-indexed
    const year = date.getFullYear();
    
    // Reduce each component to single digit or master number
    const dayReduced = reduceNumber(day);
    const monthReduced = reduceNumber(month);
    const yearReduced = reduceNumber(year);
    
    // Sum all components
    const sum = dayReduced + monthReduced + yearReduced;
    
    // Reduce final sum to single digit or master number
    return reduceNumber(sum);
}

/**
 * Event listener for Life Path Number form submission
 */
document.getElementById('lifePathForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const birthDate = document.getElementById('birthDate').value;
    
    if (!birthDate) {
        alert('Please select a birth date');
        return;
    }
    
    // Calculate Life Path Number
    const lifePathNumber = calculateLifePath(birthDate);
    
    // Display results
    document.getElementById('lifePathNumber').textContent = lifePathNumber;
    document.getElementById('lifePathMeaning').innerHTML = generateMeaningHTML(lifePathNumber);
    document.getElementById('lifePathResult').classList.remove('hidden');
    
    // Smooth scroll to results
    setTimeout(() => {
        document.getElementById('lifePathResult').scrollIntoView({ behavior: 'smooth' });
    }, 100);
});

// ========== NAME NUMEROLOGY CALCULATOR ==========

/**
 * Calculates Name Number using Pythagorean system
 * Each letter A-Z is assigned 1-9 based on its position
 * @param {string} name - Full name to analyze
 * @returns {object} - Object containing individual letters and their values, total, and reduced number
 */
function calculateNameNumber(name) {
    // Remove spaces and convert to uppercase
    const cleanName = name.replace(/\s+/g, '').toUpperCase();
    
    let total = 0;
    const letterValues = {};
    
    // Calculate value for each letter
    for (let char of cleanName) {
        if (pythagoreanSystem[char]) {
            const value = pythagoreanSystem[char];
            letterValues[char] = (letterValues[char] || 0) + value;
            total += value;
        }
    }
    
    // Reduce total to single digit or master number
    const reduced = reduceNumber(total);
    
    return {
        name: cleanName,
        letterValues: letterValues,
        total: total,
        reduced: reduced
    };
}

/**
 * Generates breakdown string showing each letter and its value
 * @param {object} analysis - Result from calculateNameNumber
 * @returns {string} - Formatted breakdown
 */
function generateNameBreakdown(analysis) {
    let breakdown = '';
    for (let char of analysis.name) {
        if (pythagoreanSystem[char]) {
            breakdown += `${char}(${pythagoreanSystem[char]}) + `;
        }
    }
    // Remove trailing " + "
    return breakdown.slice(0, -3);
}

/**
 * Event listener for Name Numerology form submission
 */
document.getElementById('nameNumerologyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value.trim();
    
    if (!fullName) {
        alert('Please enter your full name');
        return;
    }
    
    // Check if name contains only letters and spaces
    if (!/^[a-zA-Z\s]+$/.test(fullName)) {
        alert('Please enter only letters and spaces');
        return;
    }
    
    // Calculate Name Number
    const analysis = calculateNameNumber(fullName);
    
    // Display results
    document.getElementById('nameBreakdown').textContent = generateNameBreakdown(analysis);
    document.getElementById('nameTotal').textContent = analysis.total;
    document.getElementById('nameReduced').textContent = analysis.reduced;
    document.getElementById('nameNumerologyNumber').textContent = analysis.reduced;
    document.getElementById('nameNumerologyMeaning').innerHTML = generateMeaningHTML(analysis.reduced);
    document.getElementById('nameNumerologyResult').classList.remove('hidden');
    
    // Smooth scroll to results
    setTimeout(() => {
        document.getElementById('nameNumerologyResult').scrollIntoView({ behavior: 'smooth' });
    }, 100);
});

// ========== SMOOTH SCROLL NAVIGATION ==========
/**
 * Smooth scroll for all navigation links
 */
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ========== INITIALIZATION ==========
/**
 * Initialize script on page load
 */
document.addEventListener('DOMContentLoaded', function() {
    // Set today's date as maximum for birth date picker
    const birthDateInput = document.getElementById('birthDate');
    const today = new Date().toISOString().split('T')[0];
    birthDateInput.max = today;
    
    // Optional: Set a reasonable minimum (100 years ago)
    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 120);
    birthDateInput.min = minDate.toISOString().split('T')[0];
});

// ========== CONSOLE LOG FOR DEBUGGING ==========
console.log('AI Numerology Insights loaded successfully!');
console.log('Available functions: calculateLifePath(), calculateNameNumber(), reduceNumber()');
