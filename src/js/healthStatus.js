export default function healthStatus(hero = {}) {
  if (hero.health > 50) {
    return 'healthy';
  } else if (hero.health <= 50 && hero.health >= 15) {
    return 'wounded';
  } else if (hero.health < 15) {
    return 'critical';
  }
}